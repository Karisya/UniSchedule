import { teachers } from '../store/mockData';
import type { Teacher } from '../types';

/**
 * Кто ведёт дисциплину по графику весны 2026 и плану кафедры (id как в mockData).
 * При выборе предмета в модалке показываются только эти преподаватели.
 */
export const SUBJECT_TEACHER_IDS: Record<string, readonly string[]> = {
  /** ПЭД — Демидчик (поток, лаб. 1–2 пг), Беленькая (лаб. 3 пг) */
  '1': ['1', '2'],
  /** СРиТИ — Мигель (лекции, часть лаб.), Черепанова (лаб. 3 пг), Гринько (лаб.), Беленькая (лаб. 1–2РФ) */
  '2': ['2', '7', '9', '11'],
  /** ЦОС — Полещук, Болотько (3 пг), Демьянюк; лекция пт — деканат */
  '3': ['4', '10', '13', '15'],
  /** ТКиВ — Малый (лекция и лабораторные) */
  '4': ['6'],
  /** ОСвСИВ — Курило */
  '5': ['3'],
  /** Кураторский час — Беленькая */
  '6': ['2'],
  /** УП «АиЦСхемотехника» — Малый */
  '7': ['6'],
  /** КМЭДПиС — Малый (лекции), Полещук (лаб.), Романов (по плану) */
  '8': ['4', '6', '12'],
  /** МСиТ — Максимович */
  '9': ['5'],
  /** НАСЗП — Максимович */
  '10': ['5'],
  /** РВПиС — Хейдоров */
  '11': ['8'],
};

export function getTeacherIdsForSubject(subjectId: string): string[] {
  return [...(SUBJECT_TEACHER_IDS[subjectId] ?? [])];
}

export function getTeachersForSubject(subjectId: string): Teacher[] {
  const ids = new Set(getTeacherIdsForSubject(subjectId));
  return teachers.filter((t) => ids.has(t.id));
}

export function isTeacherValidForSubject(teacherId: string, subjectId: string): boolean {
  const allowed = SUBJECT_TEACHER_IDS[subjectId];
  if (!allowed?.length) return false;
  return allowed.includes(teacherId);
}
