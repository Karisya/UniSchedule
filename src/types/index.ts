export type UserRole = 'student' | 'teacher' | 'administrator';

export type LessonType = 'lecture' | 'practice' | 'laboratory';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  groupId?: string; // для студента
  teacherId?: string; // для преподавателя
}

export interface Teacher {
  id: string;
  /** Краткая подпись (как в графике) */
  name: string;
  /** По документу нагрузки; если отлично известно из PDF */
  fullNameOfficial?: string;
  /** Должность и учёное звание (как в описании кафедры) */
  position?: string;
  /** Ставка (1,0 / 0,5 …) */
  rate?: number;
  /** Плановые часы весеннего семестра по сводке кафедры (для шкалы «от плана» в админке) */
  plannedHoursSpring?: number;
}

export interface Subject {
  id: string;
  name: string;
}

export interface Auditorium {
  id: string;
  name: string;
  /** Компактный / небольшой зал */
  compact?: boolean;
  /** Есть проектор */
  hasProjector?: boolean;
  /** Интерактивная доска */
  hasInteractiveBoard?: boolean;
}

export interface Lesson {
  id: string;
  subjectId: string;
  teacherId: string;
  auditoriumId: string;
  groupId: string;
  type: LessonType;
  dayOfWeek: number; // 0 = Monday … 5 = Saturday
  timeSlot: number; // индекс пары в TIME_SLOTS (0 …)
  /** Понедельник недели, к которой относится занятие (YYYY-MM-DD, локальное) */
  weekStartKey: string;
  progress?: number; // 0-100 для преподавателя
  /** Доп. заметка (только преподаватель / администратор), из модалки */
  extraInfo?: string;
}

export interface Group {
  id: string;
  name: string;
  course: number; // 1-4 курс
}

export interface DbUser {
  email: string;
  password: string;
  role: UserRole;
  groupId?: string;
  teacherId?: string;
}

export const TIME_SLOTS = [
  { start: '08:00', end: '09:30' },
  { start: '09:45', end: '11:15' },
  { start: '11:30', end: '13:00' },
  { start: '13:30', end: '15:00' },
  { start: '15:15', end: '16:45' },
  { start: '17:00', end: '18:30' },
  { start: '18:40', end: '20:10' },
];

export const DAYS_OF_WEEK = [
  'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',
];
