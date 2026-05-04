/**
 * Данные кафедры + ссылки на полные текстовые расшифровки PDF (`pdfExtracts.ts`).
 */

import type { TeacherDisciplineLoad } from './workloadCompat';
export type { TeacherDisciplineLoad } from './workloadCompat';

export { CATALOG_PLAN_ROWS, TEACHER_WORKLOAD_FROM_PLAN } from './workloadFromPdf';
import {
  TEACHER_WORKLOAD_FROM_PLAN as _tw,
  CATALOG_PLAN_ROWS,
} from './workloadFromPdf';

export const FACULTY_NAME =
  'Факультет радиофизики и компьютерных технологий Белорусского государственного университета';

export const DEPARTMENT_NAME = 'Кафедра радиофизики и цифровых медиа технологий';

export const DATA_SOURCES =
  'Источники файлов (UTF-8): «Нагрузка 2025–2026 30.10.2025», «График работы весна 2026» — полные машинные расшифровки встроены в приложение (раздел справочника).';

/** Пояснения из шапки графика работы и ходового использования аббревиатур на кафедре */
export const SCHEDULE_LEGEND = [
  {
    code: 'ЧН / НН',
    meaning:
      'чётная неделя / нечётная неделя (в карточках занятий пишется полностью вместо аббревиатур)',
  },
  { code: 'ЛК / ЛБ', meaning: 'лекция / лабораторная работа' },
  { code: 'ПЭД', meaning: 'прикладная электродинамика (график весны и телефонный сэмпл)' },
  { code: 'СРиТИ', meaning: 'статистическая радиофизика и теория информации' },
  { code: 'ЦОС', meaning: 'цифровая обработка сигналов' },
  { code: 'ТКиВ', meaning: 'тематика курса «Теория колебаний и волн»' },
  { code: 'ОСвСИВ', meaning: 'основы СВЧ и интегральных устройств / электродинамика СВЧ' },
  { code: 'КМЭПиС / КМЭДПиС', meaning: 'компьютерная микроэлектроника и программируемые интегральные системы' },
  { code: 'МСиТ', meaning: 'микроволновые системы и технологии' },
  { code: 'УП АиЦ', meaning: 'учебная практика по аналоговой и цифровой схемотехнике' },
  { code: 'РВПиС', meaning: 'радиоволновые процессы и системы' },
  { code: '601КБ / 602КБ', meaning: 'потоки направления «Кибербезопасность»' },
  { code: 'РФ: 1–8 и пг.', meaning: 'радиофизические потоки; «пг» в графиках — подгруппа (в карточках расписания пишется как «N-я подгруппа»)' },
];

/** Табличная версия блоков с указанными в плане исполнителями (пересечётся с преподавателями приложения по id). */
export const DISCIPLINE_LOAD: TeacherDisciplineLoad[] = _tw.map((r) => ({
  teacherId: r.teacherId,
  discipline: r.discipline,
  specialization: r.specialization,
  hours: r.semesterTotalHours,
  note: r.note,
}));

/** Линии общего каталога (часы распределения без привязки к ФИО в строке источника). */
export function catalogPlanForHandbook(): { discipline: string; specialization: string; hours?: number }[] {
  return CATALOG_PLAN_ROWS.map((r) => ({
    discipline: r.discipline,
    specialization: r.specialization,
    hours: r.totalHoursListed,
  }));
}
