import type { Lesson, Teacher, Subject, Auditorium, Group, DbUser } from '../types';

export const teachers: Teacher[] = [
  { id: '1', name: 'Иванов А.П.' },
  { id: '2', name: 'Петрова М.С.' },
  { id: '3', name: 'Морозов Д.А.' },
  { id: '4', name: 'Сидорова Е.В.' },
  { id: '5', name: 'Козлов И.Н.' },
];

export const subjects: Subject[] = [
  { id: '1', name: 'Математический анализ' },
  { id: '2', name: 'Программирование' },
  { id: '3', name: 'Физика' },
  { id: '4', name: 'Линейная алгебра' },
  { id: '5', name: 'Базы данных' },
  { id: '6', name: 'Компьютерные сети' },
  { id: '7', name: 'Алгоритмы и структуры данных' },
  { id: '8', name: 'Операционные системы' },
  { id: '9', name: 'Дискретная математика' },
  { id: '10', name: 'Философия' },
];

export const auditoriums: Auditorium[] = [
  { id: '1', name: 'Ауд. 101' },
  { id: '2', name: 'Ауд. 205' },
  { id: '3', name: 'Ауд. Л-3' },
  { id: '4', name: 'Ауд. Л-7' },
  { id: '5', name: 'Ауд. Б-12' },
  { id: '6', name: 'Ауд. 305' },
];

export const groups: Group[] = [
  { id: '1', name: 'ИВТ-201', course: 2 },
  { id: '2', name: 'ИВТ-202', course: 2 },
  { id: '3', name: 'ПИ-201', course: 2 },
];

export const users: DbUser[] = [
  { email: 'student@uni.ru', password: 'student', role: 'student', groupId: '1' },
  { email: 'teacher@uni.ru', password: 'teacher', role: 'teacher', teacherId: '1' },
  { email: 'admin@uni.ru', password: 'admin', role: 'administrator' },
];

export const initialLessons: Lesson[] = [
  { id: '1', subjectId: '1', teacherId: '1', auditoriumId: '1', groupId: '1', type: 'lecture', dayOfWeek: 0, timeSlot: 0 },
  { id: '2', subjectId: '2', teacherId: '2', auditoriumId: '3', groupId: '1', type: 'laboratory', dayOfWeek: 0, timeSlot: 1 },
  { id: '3', subjectId: '3', teacherId: '3', auditoriumId: '1', groupId: '1', type: 'practice', dayOfWeek: 0, timeSlot: 2 },
  { id: '4', subjectId: '4', teacherId: '1', auditoriumId: '2', groupId: '1', type: 'lecture', dayOfWeek: 1, timeSlot: 0 },
  { id: '5', subjectId: '5', teacherId: '3', auditoriumId: '4', groupId: '1', type: 'laboratory', dayOfWeek: 1, timeSlot: 1 },
  { id: '6', subjectId: '6', teacherId: '4', auditoriumId: '2', groupId: '1', type: 'practice', dayOfWeek: 2, timeSlot: 2 },
  { id: '7', subjectId: '8', teacherId: '5', auditoriumId: '1', groupId: '1', type: 'lecture', dayOfWeek: 2, timeSlot: 0 },
  { id: '8', subjectId: '9', teacherId: '1', auditoriumId: '2', groupId: '1', type: 'lecture', dayOfWeek: 3, timeSlot: 0 },
  { id: '9', subjectId: '7', teacherId: '2', auditoriumId: '3', groupId: '1', type: 'practice', dayOfWeek: 3, timeSlot: 2 },
  { id: '10', subjectId: '10', teacherId: '4', auditoriumId: '2', groupId: '1', type: 'lecture', dayOfWeek: 4, timeSlot: 0 },
  { id: '11', subjectId: '2', teacherId: '2', auditoriumId: '3', groupId: '1', type: 'practice', dayOfWeek: 4, timeSlot: 2, progress: 65 },
  { id: '13', subjectId: '1', teacherId: '1', auditoriumId: '2', groupId: '1', type: 'practice', dayOfWeek: 1, timeSlot: 2, progress: 90 },
];
