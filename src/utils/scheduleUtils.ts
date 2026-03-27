import type { Lesson } from '../types';
import { subjects, teachers, auditoriums, groups } from '../store/mockData';

export function getSubjectName(id: string) {
  return subjects.find((s) => s.id === id)?.name ?? '';
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

/** Процент для полосы прогресса: явный `lesson.progress` или демо-оценка по id предмета */
export function getLessonProgressPercent(lesson: Lesson): number {
  if (lesson.progress != null) return lesson.progress;
  const n = parseInt(lesson.subjectId, 10) || 0;
  return Math.min(92, 35 + (n % 7) * 8);
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

  for (const l of lessons) {
    if (l.id === excludeLessonId) continue;
    if (weekStartKey != null && l.weekStartKey !== weekStartKey) continue;
    if (l.dayOfWeek !== dayOfWeek || l.timeSlot !== timeSlot) continue;

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
  return lessons.some(
    (l) =>
      (weekStartKey == null || l.weekStartKey === weekStartKey) &&
      l.dayOfWeek === dayOfWeek &&
      l.timeSlot === timeSlot &&
      l.id !== excludeLessonId
  );
}

export function getWeekRange(date: Date): { start: Date; end: Date } {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Понедельник = 1
  d.setDate(d.getDate() + diff);
  const start = new Date(d);
  const end = new Date(d);
  end.setDate(end.getDate() + 4); // до пятницы
  return { start, end };
}

export function formatDateRange(start: Date, end: Date): string {
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  return `${start.toLocaleDateString('ru-RU', opts)} – ${end.toLocaleDateString('ru-RU', opts)}`;
}

/** Пн–Пт относительно понедельника недели */
export function getWeekDayDates(weekMonday: Date): Date[] {
  const base = new Date(weekMonday.getFullYear(), weekMonday.getMonth(), weekMonday.getDate());
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    return d;
  });
}

export function formatShortDayDate(d: Date): string {
  return d.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });
}

/** Индекс колонки 0=Пн … 4=Пт для календарной даты */
export function calendarDayToWeekdayIndex(d: Date): number | null {
  const day = d.getDay();
  if (day === 0 || day === 6) return null;
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

/** Несколько занятий в одном слоте → описать конфликты аудитории и преподавателя */
export function findScheduleConflicts(lessons: Lesson[]): ConflictEntry[] {
  const SLOT_SEP = '\0';
  const bySlot = new Map<string, Lesson[]>();
  for (const l of lessons) {
    const key = `${l.weekStartKey}${SLOT_SEP}${l.dayOfWeek}${SLOT_SEP}${l.timeSlot}`;
    if (!bySlot.has(key)) bySlot.set(key, []);
    bySlot.get(key)!.push(l);
  }
  const result: ConflictEntry[] = [];
  const dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
  const slotLabel = (slot: number) => {
    const slots = ['08:00–09:30', '09:45–11:15', '11:30–13:00', '13:30–15:00', '15:15–16:45', '17:00–18:30'];
    return slots[slot] ?? `${slot}`;
  };

  for (const [key, arr] of bySlot) {
    if (arr.length < 2) continue;
    const [weekStartKey, dStr, sStr] = key.split(SLOT_SEP);
    const dayOfWeek = parseInt(dStr, 10);
    const timeSlot = parseInt(sStr, 10);
    const types: ('room' | 'teacher')[] = [];
    const roomCounts = new Map<string, number>();
    const teacherCounts = new Map<string, number>();
    for (const l of arr) {
      roomCounts.set(l.auditoriumId, (roomCounts.get(l.auditoriumId) ?? 0) + 1);
      teacherCounts.set(l.teacherId, (teacherCounts.get(l.teacherId) ?? 0) + 1);
    }
    if ([...roomCounts.values()].some((c) => c > 1)) types.push('room');
    if ([...teacherCounts.values()].some((c) => c > 1)) types.push('teacher');

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
      description: `Неделя с ${weekStartKey}, ${dayNames[dayOfWeek]}, ${slotLabel(timeSlot)}. Конфликт по: ${typeRu || 'несколько занятий в слоте'}. ${descParts.join(' | ')}`,
    });
  }
  return result;
}

