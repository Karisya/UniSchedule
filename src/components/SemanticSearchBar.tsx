import { useMemo, useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useAppSelector } from '../store/hooks';
import type { Lesson } from '../types';
import { rankLessonsBySemanticQuery } from '../utils/semanticSearch';
import {
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getGroupName,
  getLessonTypeLabel,
} from '../utils/scheduleUtils';
import { DAYS_OF_WEEK, TIME_SLOTS } from '../types';

type Role = 'student' | 'teacher' | 'admin';

interface SemanticSearchBarProps {
  role: Role;
  /** Клик по строке результата — перейти к занятию в сетке расписания */
  onLessonNavigate?: (lesson: Lesson) => void;
}

export default function SemanticSearchBar({ role, onLessonNavigate }: SemanticSearchBarProps) {
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const user = useAppSelector((s) => s.user.current);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const filteredLessons = useMemo(() => {
    if (role === 'student') {
      const gid = user?.groupId ?? 'g3-1rf';
      return lessons.filter((l) => l.groupId === gid);
    }
    if (role === 'teacher') {
      const tid = user?.teacherId ?? '1';
      return lessons.filter((l) => l.teacherId === tid);
    }
    return lessons;
  }, [lessons, role, user?.groupId, user?.teacherId]);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 1) return [];
    return rankLessonsBySemanticQuery(q, filteredLessons, { limit: 15, minScore: 0.001 });
  }, [query, filteredLessons]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const formatLine = (l: Lesson) => {
    const day = DAYS_OF_WEEK[l.dayOfWeek] ?? '';
    const slot = TIME_SLOTS[l.timeSlot];
    const tim = slot ? `${slot.start}–${slot.end}` : '';
    return `${day}, ${tim} · ${getGroupName(l.groupId)} · ${getLessonTypeLabel(l.type)}`;
  };

  return (
    <div ref={wrapRef} className="relative w-full max-w-xl">
      <label htmlFor="semantic-search-input" className="sr-only">
        Семантический поиск по расписанию
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary-400 focus-within:border-primary-400">
        <Search className="w-4 h-4 text-gray-400 shrink-0" aria-hidden />
        <input
          id="semantic-search-input"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={
            role === 'admin'
              ? 'Поиск: предмет, преподаватель, группа, аудитория…'
              : 'Поиск по вашему расписанию…'
          }
          className="min-w-0 flex-1 text-sm text-gray-900 placeholder:text-gray-400 bg-transparent outline-none"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setOpen(false);
            }}
            className="p-0.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Очистить"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">
        Поиск с первых букв: подстрока, начало слов (ФИО, предмет, аудитория, группа, день недели и т.д.) плюс
        текстовые веса по расписанию.
      </p>

      {open && query.trim().length >= 1 && (
        <div className="absolute z-[100] left-0 right-0 top-full mt-1 rounded-lg border border-gray-200 bg-white shadow-lg max-h-[min(70vh,420px)] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-3 py-4 text-sm text-gray-600">
              Совпадений нет или слишком короткая буква (попробуйте другую букву или слог).
            </div>
          ) : (
            <ul className="py-1 divide-y divide-gray-100">
              {results.map(({ lesson: l, score }) => (
                <li key={l.id}>
                  <button
                    type="button"
                    disabled={!onLessonNavigate}
                    onClick={() => {
                      onLessonNavigate?.(l);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 hover:bg-gray-50 ${onLessonNavigate ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                  <p className="font-medium text-gray-900 text-sm">{getSubjectName(l.subjectId)}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{formatLine(l)}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {getTeacherName(l.teacherId)} · {getAuditoriumName(l.auditoriumId)}
                    {l.weekStartKey ? ` · нед. ${l.weekStartKey}` : ''}
                  </p>
                  {role === 'admin' && l.extraInfo?.trim() && (
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-3" title={l.extraInfo}>
                      <span className="font-medium text-gray-600">Дополнительная информация. </span>
                      {l.extraInfo}
                    </p>
                  )}
                  <p className="text-[10px] text-gray-400 mt-1 tabular-nums">
                    Релевантность: {(score * 100).toFixed(0)}%
                  </p>
                  {onLessonNavigate && (
                    <p className="text-[11px] text-primary-600 mt-1 font-medium">Перейти к занятию →</p>
                  )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
