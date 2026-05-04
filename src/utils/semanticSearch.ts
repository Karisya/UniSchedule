import type { Lesson } from '../types';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import {
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getGroupName,
  getLessonTypeLabel,
} from './scheduleUtils';

/** Одиночные буквы, дающие слишком много ложных срабатываний — пропускаем только их */
const RU_SINGLE_CHAR_SKIP = new Set(['и', 'в', 'к', 'у', 'с', 'о', 'я', 'э', 'ё', 'ь', 'ъ', 'ы']);

const RU_STOP = new Set([
  'и', 'в', 'во', 'не', 'на', 'по', 'к', 'с', 'со', 'из', 'у', 'о', 'об', 'от', 'за', 'до', 'для', 'при',
  'а', 'но', 'как', 'что', 'это', 'то', 'же', 'ли', 'бы', 'лишь',
]);

export function tokenize(text: string): string[] {
  const lower = text.toLowerCase().replace(/ё/g, 'е');
  return lower
    .split(/[^\p{L}\p{N}]+/u)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2 && !RU_STOP.has(t));
}

function wordsLiberal(text: string): string[] {
  const lower = text.toLowerCase().replace(/ё/g, 'е');
  return lower
    .split(/[^\p{L}\p{N}]+/u)
    .map((t) => t.trim())
    .filter((t) => t.length >= 1);
}

export function buildLessonSearchBlob(lesson: Lesson): string {
  const slot = TIME_SLOTS[lesson.timeSlot];
  const timeStr = slot ? `${slot.start} ${slot.end}` : '';
  const day = DAYS_OF_WEEK[lesson.dayOfWeek] ?? '';
  const parts = [
    getSubjectName(lesson.subjectId),
    getTeacherName(lesson.teacherId),
    getGroupName(lesson.groupId),
    getAuditoriumName(lesson.auditoriumId),
    getLessonTypeLabel(lesson.type),
    lesson.type,
    day,
    timeStr,
    lesson.weekStartKey,
    lesson.extraInfo ?? '',
    lesson.progress != null ? `прогресс ${lesson.progress}%` : '',
  ];
  return parts.filter(Boolean).join(' ');
}

type SparseVec = Map<string, number>;

function termFrequency(tokens: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const t of tokens) {
    m.set(t, (m.get(t) ?? 0) + 1);
  }
  return m;
}

function tfLog(tf: number): number {
  return tf > 0 ? 1 + Math.log(tf) : 0;
}

function sparseTfidf(tfMap: Map<string, number>, idfFn: (t: string) => number): SparseVec {
  const v = new Map<string, number>();
  for (const [term, raw] of tfMap) {
    const w = tfLog(raw) * idfFn(term);
    if (w !== 0) v.set(term, w);
  }
  return v;
}

/**
 * Совпадения при постепенном вводе: подстрока целиком, префикс слова,
 * несколько слов через пробел.
 */
function typingOverlapScore(normalizedQuery: string, blob: string): number {
  const b = blob;
  const words = wordsLiberal(b);

  if (normalizedQuery.length === 0) return 0;

  if (normalizedQuery.length === 1) {
    if (RU_SINGLE_CHAR_SKIP.has(normalizedQuery)) return 0;
    let m = 0;
    for (const w of words) {
      if (w.startsWith(normalizedQuery)) {
        m = Math.max(m, 0.38 + Math.min(0.42, normalizedQuery.length / Math.max(w.length, 4)));
      } else if (w.includes(normalizedQuery)) {
        m = Math.max(m, 0.14);
      }
    }
    if (b.includes(normalizedQuery)) m = Math.max(m, 0.16);
    return Math.min(1, m);
  }

  if (b.includes(normalizedQuery)) {
    return Math.min(1, 0.52 + Math.min(0.45, normalizedQuery.length / 48));
  }

  const parts = normalizedQuery.split(/\s+/).filter((p) => p.length > 0);

  if (parts.length > 1) {
    let ok = 0;
    let total = 0;
    for (const p of parts) {
      if (p.length === 1 && RU_SINGLE_CHAR_SKIP.has(p)) continue;
      total += 1;
      if (
        b.includes(p) ||
        words.some((w) => w.startsWith(p) || (p.length >= 2 && w.includes(p)))
      ) {
        ok += 1;
      }
    }
    if (total === 0) return 0;
    return Math.min(1, 0.32 + 0.54 * (ok / total));
  }

  const seg = normalizedQuery;
  let best = 0;
  for (const w of words) {
    if (w.startsWith(seg)) {
      best = Math.max(best, 0.3 + Math.min(0.65, (seg.length / Math.max(w.length, seg.length)) * 0.65));
    } else if (seg.length >= 2 && w.includes(seg)) {
      best = Math.max(best, 0.26 + Math.min(0.55, (seg.length / w.length) * 0.5));
    }
  }
  return Math.min(1, best);
}

export function rankLessonsBySemanticQuery(
  query: string,
  lessons: Lesson[],
  opts?: { minScore?: number; limit?: number }
): { lesson: Lesson; score: number }[] {
  const minScore = opts?.minScore ?? 0.001;
  const limit = opts?.limit ?? 25;
  const trimmed = query.trim();
  if (!trimmed.length || lessons.length === 0) return [];

  const normalizedQ = trimmed.toLowerCase().replace(/ё/g, 'е');
  const qTokens = tokenize(query);

  const docs = lessons.map((lesson) => {
    const raw = buildLessonSearchBlob(lesson);
    const blobNorm = raw.toLowerCase().replace(/ё/g, 'е');
    const tokens = tokenize(raw);
    return { lesson, blobNorm, tokens };
  });

  const N = docs.length;
  const df = new Map<string, number>();
  for (const { tokens } of docs) {
    const seen = new Set(tokens);
    for (const t of seen) {
      df.set(t, (df.get(t) ?? 0) + 1);
    }
  }

  const idfFn = (term: string): number => {
    const d = df.get(term) ?? 0;
    return Math.log(1 + N / (d + 1e-9));
  };

  let qVec: SparseVec | null = null;
  const qSet = new Set(qTokens);
  if (qTokens.length > 0) {
    qVec = sparseTfidf(termFrequency(qTokens), idfFn);
  }

  const cosine = (a: SparseVec, b: SparseVec): number => {
    let dot = 0;
    let na = 0;
    let nb = 0;
    for (const v of a.values()) na += v * v;
    for (const v of b.values()) nb += v * v;
    const smaller = a.size < b.size ? a : b;
    const other = a.size < b.size ? b : a;
    for (const [term, va] of smaller) {
      const vb = other.get(term);
      if (vb != null) dot += va * vb;
    }
    const denom = Math.sqrt(na) * Math.sqrt(nb);
    return denom > 0 ? dot / denom : 0;
  };

  function queryTermRecall(docTokens: string[]): number {
    if (qSet.size === 0) return 0;
    const docSet = new Set(docTokens);
    let hit = 0;
    for (const t of qSet) {
      if (docSet.has(t)) hit += 1;
    }
    return hit / qSet.size;
  }

  return docs
    .map(({ lesson, blobNorm, tokens }) => {
      const typing = typingOverlapScore(normalizedQ, blobNorm);
      let vecPart = 0;
      if (qVec !== null && qTokens.length > 0) {
        const dVec = sparseTfidf(termFrequency(tokens), idfFn);
        const cos = cosine(qVec, dVec);
        const recall = queryTermRecall(tokens);
        vecPart = recall > 0 ? 0.52 * recall + 0.48 * cos : cos;
      }
      const wVec = normalizedQ.length >= 8 ? 0.42 : normalizedQ.length <= 3 ? 0.22 : 0.34;
      const blended =
        typing > 0 && vecPart > 0 ? typing * (1 - wVec) + vecPart * wVec : 0;
      const score = Math.max(typing, vecPart, blended);
      return { lesson, score };
    })
    .filter((x) => x.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
