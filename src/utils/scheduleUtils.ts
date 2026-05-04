import type { Lesson } from '../types';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../types';
import { lessonCalendarDateKey } from './weekKeys';
import {
  subjects,
  teachers,
  auditoriums,
  groups,
  TEACHER_LESSON_PLAN_BUCKETS,
  ACADEMIC_HOURS_PER_SCHEDULE_SLOT,
} from '../store/mockData';

export function getSubjectName(id: string) {
  return subjects.find((s) => s.id === id)?.name ?? '';
}

/** Несколько занятий в одной ячейке — предсказуемый порядок (не «одно перекрыло другое»). */
export function sortLessonsForCellDisplay(list: Lesson[]): Lesson[] {
  return [...list].sort((a, b) => {
    const sa = getSubjectName(a.subjectId);
    const sb = getSubjectName(b.subjectId);
    const cmp = sa.localeCompare(sb, 'ru');
    if (cmp !== 0) return cmp;
    return a.id.localeCompare(b.id);
  });
}

export function getTeacherName(id: string) {
  return teachers.find((t) => t.id === id)?.name ?? '';
}

export function getAuditoriumName(id: string) {
  return auditoriums.find((a) => a.id === id)?.name ?? '';
}

/** Краткое описание аудитории для преподавателя */
export function getAuditoriumDetailLine(id: string): string {
  const a = auditoriums.find((x) => x.id === id);
  if (!a) return '';
  const parts: string[] = [];
  if (a.compact) parts.push('компактный зал');
  else parts.push('просторный зал');
  parts.push(a.hasProjector ? 'есть проектор' : 'без проектора');
  if (a.hasInteractiveBoard) parts.push('интерактивная доска');
  return parts.join(' · ');
}

export function getGroupName(id: string) {
  return groups.find((g) => g.id === id)?.name ?? '';
}

export function getGroupCourse(id: string): number {
  return groups.find((g) => g.id === id)?.course ?? 1;
}

export function getLessonTypeLabel(type: string) {
  const map: Record<string, string> = {
    lecture: 'Лекция',
    practice: 'Практика',
    laboratory: 'Лабораторная',
  };
  return map[type] ?? type;
}

export function getLessonTypeColors(type: string) {
  const map: Record<string, { bg: string; text: string }> = {
    lecture: { bg: 'bg-lecture-bg', text: 'text-lecture-text' },
    practice: { bg: 'bg-practice-bg', text: 'text-practice-text' },
    laboratory: { bg: 'bg-laboratory-bg', text: 'text-laboratory-text' },
  };
  return map[type] ?? { bg: 'bg-gray-100', text: 'text-gray-800' };
}

export function getLessonPlanBucketEntry(lesson: Lesson) {
  return TEACHER_LESSON_PLAN_BUCKETS.find(
    (b) =>
      b.teacherId === lesson.teacherId &&
      b.subjectId === lesson.subjectId &&
      b.type === lesson.type &&
      b.groupId === lesson.groupId,
  );
}

/** Фактически набранные часы по тому же «ведру», что и урок (все недели в данных). */
export function getScheduledHoursInPlanBucket(lesson: Lesson, allLessons: Lesson[]): number {
  const n = allLessons.filter(
    (l) =>
      l.teacherId === lesson.teacherId &&
      l.subjectId === lesson.subjectId &&
      l.type === lesson.type &&
      l.groupId === lesson.groupId,
  ).length;
  return n * ACADEMIC_HOURS_PER_SCHEDULE_SLOT;
}

export function getLessonProgressInfo(lesson: Lesson, allLessons: Lesson[]) {
  const bucket = getLessonPlanBucketEntry(lesson);
  if (!bucket || bucket.plannedHours <= 0) return null;
  const scheduledHours = getScheduledHoursInPlanBucket(lesson, allLessons);
  return {
    scheduledHours,
    plannedHours: bucket.plannedHours,
    percent: Math.min(100, Math.round((100 * scheduledHours) / bucket.plannedHours)),
  };
}

/**
 * Полоса прогресса у преподавателя: по плану на пару «предмет + тип + группа».
 * Передайте `allLessons` из глобального расписания; иначе — демо по subjectId или `lesson.progress`.
 */
export function getLessonProgressPercent(lesson: Lesson, allLessons?: Lesson[]): number {
  if (lesson.progress != null) return lesson.progress;
  if (allLessons?.length) {
    const info = getLessonProgressInfo(lesson, allLessons);
    if (info) return info.percent;
  }
  const n = parseInt(lesson.subjectId, 10) || 0;
  return Math.min(92, 35 + (n % 7) * 8);
}

/** Плановые часы преподавателя за семестр: из `plannedHoursSpring` или сумма вёдер `TEACHER_LESSON_PLAN_BUCKETS`. */
export function getTeacherPlannedSemesterHours(teacherId: string): number | null {
  const t = teachers.find((x) => x.id === teacherId);
  if (t?.plannedHoursSpring != null && t.plannedHoursSpring > 0) {
    return t.plannedHoursSpring;
  }
  const bucketSum = TEACHER_LESSON_PLAN_BUCKETS.filter((b) => b.teacherId === teacherId).reduce(
    (s, b) => s + b.plannedHours,
    0,
  );
  return bucketSum > 0 ? bucketSum : null;
}

export interface AdminTeacherWorkloadRow {
  teacherId: string;
  teacherName: string;
  /** Число ячеек расписания (недели × слоты в данных) */
  lessonSlots: number;
  /** Факт: ячейки × 2 акад. ч */
  scheduledHours: number;
  /** План за весну, если известен */
  plannedHours: number | null;
  percent: number | null;
}

/** Сводка по всем преподавателям из справочника и/или встречающимся в расписании. */
export function buildAdminTeacherWorkloadRows(allLessons: Lesson[]): AdminTeacherWorkloadRow[] {
  const slotCount = new Map<string, number>();
  for (const l of allLessons) {
    slotCount.set(l.teacherId, (slotCount.get(l.teacherId) ?? 0) + 1);
  }
  const ids = new Set<string>();
  for (const t of teachers) ids.add(t.id);
  for (const id of slotCount.keys()) ids.add(id);

  return [...ids]
    .map((teacherId) => {
      const tMeta = teachers.find((x) => x.id === teacherId);
      const lessonSlots = slotCount.get(teacherId) ?? 0;
      const scheduledHours = lessonSlots * ACADEMIC_HOURS_PER_SCHEDULE_SLOT;
      const plannedHours = getTeacherPlannedSemesterHours(teacherId);
      const percent =
        plannedHours != null && plannedHours > 0
          ? Math.min(100, Math.round((100 * scheduledHours) / plannedHours))
          : null;
      return {
        teacherId,
        teacherName: tMeta?.name || getTeacherName(teacherId) || `Преподаватель ${teacherId}`,
        lessonSlots,
        scheduledHours,
        plannedHours,
        percent,
      };
    })
    .filter((r) => r.scheduledHours > 0 || r.plannedHours != null)
    .sort((a, b) => a.teacherName.localeCompare(b.teacherName, 'ru'));
}

export function summarizeAdminTeacherWorkload(rows: AdminTeacherWorkloadRow[]) {
  const withPlan = rows.filter((r) => r.plannedHours != null && r.plannedHours > 0);
  const sumScheduledScoped = withPlan.reduce((s, r) => s + r.scheduledHours, 0);
  const sumPlannedScoped = withPlan.reduce((s, r) => s + (r.plannedHours ?? 0), 0);
  const fillPercent =
    sumPlannedScoped > 0
      ? Math.min(100, Math.round((100 * sumScheduledScoped) / sumPlannedScoped))
      : null;
  return {
    withPlanCount: withPlan.length,
    sumScheduledScoped,
    sumPlannedScoped,
    fillPercent,
    totalScheduledHours: rows.reduce((s, r) => s + r.scheduledHours, 0),
  };
}

export function hasConflict(
  lessons: Lesson[],
  dayOfWeek: number,
  timeSlot: number,
  excludeLessonId?: string,
  checkAuditorium?: string,
  checkTeacher?: string,
  weekStartKey?: string
): { roomConflict: Lesson | null; teacherConflict: Lesson | null } {
  let roomConflict: Lesson | null = null;
  let teacherConflict: Lesson | null = null;

  const refDate =
    weekStartKey != null ? lessonCalendarDateKey({ weekStartKey, dayOfWeek }) : null;

  for (const l of lessons) {
    if (l.id === excludeLessonId) continue;
    if (refDate != null) {
      if (lessonCalendarDateKey(l) !== refDate || l.timeSlot !== timeSlot) continue;
    } else {
      if (l.dayOfWeek !== dayOfWeek || l.timeSlot !== timeSlot) continue;
    }

    if (checkAuditorium && l.auditoriumId === checkAuditorium) roomConflict = l;
    if (checkTeacher && l.teacherId === checkTeacher) teacherConflict = l;
  }
  return { roomConflict, teacherConflict };
}

export function hasAnyLessonInSlot(
  lessons: Lesson[],
  dayOfWeek: number,
  timeSlot: number,
  excludeLessonId?: string,
  weekStartKey?: string
): boolean {
  const refDate =
    weekStartKey != null ? lessonCalendarDateKey({ weekStartKey, dayOfWeek }) : null;
  return lessons.some((l) => {
    if (l.id === excludeLessonId) return false;
    if (refDate != null)
      return lessonCalendarDateKey(l) === refDate && l.timeSlot === timeSlot;
    return (
      (weekStartKey == null || l.weekStartKey === weekStartKey) &&
      l.dayOfWeek === dayOfWeek &&
      l.timeSlot === timeSlot
    );
  });
}

export function getWeekRange(date: Date): { start: Date; end: Date } {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Понедельник = 1
  d.setDate(d.getDate() + diff);
  const start = new Date(d);
  const end = new Date(d);
  end.setDate(end.getDate() + 5); // до субботы включительно
  return { start, end };
}

export function formatDateRange(start: Date, end: Date): string {
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  return `${start.toLocaleDateString('ru-RU', opts)} – ${end.toLocaleDateString('ru-RU', opts)}`;
}

/** Пн–Сб относительно понедельника недели */
export function getWeekDayDates(weekMonday: Date): Date[] {
  const base = new Date(weekMonday.getFullYear(), weekMonday.getMonth(), weekMonday.getDate());
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d;
  });
}

export function formatShortDayDate(d: Date): string {
  return d.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });
}

/** Индекс колонки 0=Пн … 4=Пт, 5=Сб; только воскресенье вне сетки */
export function calendarDayToWeekdayIndex(d: Date): number | null {
  const day = d.getDay();
  if (day === 0) return null;
  if (day === 6) return 5;
  return day - 1;
}

export interface ConflictEntry {
  weekStartKey: string;
  dayOfWeek: number;
  timeSlot: number;
  lessons: Lesson[];
  types: ('room' | 'teacher')[];
  description: string;
}

/** Несколько занятий в одном слоте (календарная дата + номер пары) → конфликты аудитории и преподавателя */
export function findScheduleConflicts(lessons: Lesson[]): ConflictEntry[] {
  const SLOT_SEP = '\0';
  const bySlot = new Map<string, Lesson[]>();
  for (const l of lessons) {
    const key = `${lessonCalendarDateKey(l)}${SLOT_SEP}${l.timeSlot}`;
    if (!bySlot.has(key)) bySlot.set(key, []);
    bySlot.get(key)!.push(l);
  }
  const result: ConflictEntry[] = [];
  const slotLabel = (slot: number) => {
    const s = TIME_SLOTS[slot];
    return s ? `${s.start}–${s.end}` : `${slot}`;
  };

  for (const [key, arr] of bySlot) {
    if (arr.length < 2) continue;
    const [calendarDateKey, sStr] = key.split(SLOT_SEP);
    const timeSlot = parseInt(sStr, 10);
    const weekStartKey = arr[0].weekStartKey;
    const dayOfWeek = arr[0].dayOfWeek;
    const types: ('room' | 'teacher')[] = [];
    const roomCounts = new Map<string, number>();
    const teacherCounts = new Map<string, number>();
    for (const l of arr) {
      roomCounts.set(l.auditoriumId, (roomCounts.get(l.auditoriumId) ?? 0) + 1);
      teacherCounts.set(l.teacherId, (teacherCounts.get(l.teacherId) ?? 0) + 1);
    }
    if ([...roomCounts.values()].some((c) => c > 1)) types.push('room');
    if ([...teacherCounts.values()].some((c) => c > 1)) types.push('teacher');

    if (types.length === 0) continue;

    const typeRu = types.map((t) => (t === 'room' ? 'аудитория' : 'преподаватель')).join(', ');
    const descParts = arr.map(
      (a) =>
        `«${getSubjectName(a.subjectId)}» — ${getTeacherName(a.teacherId)}, ${getAuditoriumName(a.auditoriumId)}, ${getGroupName(a.groupId)}`,
    );

    result.push({
      weekStartKey,
      dayOfWeek,
      timeSlot,
      lessons: arr,
      types,
      description: `${calendarDateKey} (${DAYS_OF_WEEK[dayOfWeek] ?? dayOfWeek}), ${slotLabel(timeSlot)}. Конфликт по: ${typeRu || 'несколько занятий в слоте'}. ${descParts.join(' | ')}`,
    });
  }
  return result;
}

