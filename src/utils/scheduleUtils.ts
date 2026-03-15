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

export function getGroupName(id: string) {
  return groups.find((g) => g.id === id)?.name ?? '';
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

export function hasConflict(
  lessons: Lesson[],
  dayOfWeek: number,
  timeSlot: number,
  excludeLessonId?: string,
  checkAuditorium?: string,
  checkTeacher?: string
): { roomConflict: Lesson | null; teacherConflict: Lesson | null } {
  let roomConflict: Lesson | null = null;
  let teacherConflict: Lesson | null = null;

  for (const l of lessons) {
    if (l.id === excludeLessonId) continue;
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
  excludeLessonId?: string
): boolean {
  return lessons.some(
    (l) =>
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
