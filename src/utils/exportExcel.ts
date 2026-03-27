import * as XLSX from 'xlsx';
import type { Lesson } from '../types';
import {
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getGroupName,
  getLessonTypeLabel,
} from './scheduleUtils';
import { TIME_SLOTS } from '../types';

const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

export function exportLessonsToExcel(lessons: Lesson[], filename = 'raspisanie.xlsx') {
  const rows: (string | number)[][] = [
    [
      'Неделя (Пн)',
      'День',
      'Время',
      'Предмет',
      'Преподаватель',
      'Аудитория',
      'Группа',
      'Тип',
      'Доп. информация',
    ],
  ];
  const sorted = [...lessons].sort((a, b) => {
    if (a.weekStartKey !== b.weekStartKey) return a.weekStartKey.localeCompare(b.weekStartKey);
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    if (a.timeSlot !== b.timeSlot) return a.timeSlot - b.timeSlot;
    return getSubjectName(a.subjectId).localeCompare(getSubjectName(b.subjectId));
  });
  for (const l of sorted) {
    const slot = TIME_SLOTS[l.timeSlot];
    const timeStr = slot ? `${slot.start}–${slot.end}` : '';
    rows.push([
      l.weekStartKey,
      DAYS[l.dayOfWeek] ?? '',
      timeStr,
      getSubjectName(l.subjectId),
      getTeacherName(l.teacherId),
      getAuditoriumName(l.auditoriumId),
      getGroupName(l.groupId),
      getLessonTypeLabel(l.type),
      l.extraInfo?.trim() ?? '',
    ]);
  }
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, 'Расписание');
  XLSX.writeFile(wb, filename);
}
