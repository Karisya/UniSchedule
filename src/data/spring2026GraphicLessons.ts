import type { Lesson } from '../types';

/** Чередование подгрупп по графику (ЧН/НН). */
const W12 = 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.';
const W21 = 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.';
const W3N = 'Нечётная неделя: 3-я подгруппа.';
const W3C = 'Чётная неделя: 3-я подгруппа.';
const STREAM_RF = 'Поток: 1РФ, 2РФ, 3РФ, 4РФ, 8РФ.';
const STREAM_RF_KB =
  'Поток: 1РФ, 2РФ, 3РФ, 4РФ, 8РФ и группы 601КБ, 602КБ (3 курс).';

function row(
  weekStartKey: string,
  id: string,
  subjectId: string,
  teacherId: string,
  auditoriumId: string,
  groupId: string,
  type: Lesson['type'],
  dayOfWeek: number,
  timeSlot: number,
  extraInfo?: string,
): Lesson {
  return {
    id,
    subjectId,
    teacherId,
    auditoriumId,
    groupId,
    type,
    dayOfWeek,
    timeSlot,
    weekStartKey,
    extraInfo,
  };
}

/**
 * Расписание на текущую неделю по файлу «График работы весна 2026»:
 * сетка стр. 1 + листы ауд. 41, 42, 45, 49, 56.
 * Пары: 0 = 1-я (9:00), … 6 = 7-я. Дни: 0 = Пн … 5 = Сб.
 */
export function buildSpring2026GraphicLessons(weekStartKey: string): Lesson[] {
  const r = (
    id: string,
    subjectId: string,
    teacherId: string,
    auditoriumId: string,
    groupId: string,
    type: Lesson['type'],
    dayOfWeek: number,
    timeSlot: number,
    extraInfo?: string,
  ) => row(weekStartKey, id, subjectId, teacherId, auditoriumId, groupId, type, dayOfWeek, timeSlot, extraInfo);

  return [
    // —— Лекции (потоки на g3-1rf, в карточке — уточнение потока) ——
    r('g001', '1', '1', 'au-119', 'g3-1rf', 'lecture', 0, 1, STREAM_RF_KB),
    r('g002', '2', '7', 'au-115', 'g3-1rf', 'lecture', 1, 0, STREAM_RF),
    r('g003', '2', '7', 'au-117', 'g3-1rf', 'lecture', 3, 0, `${STREAM_RF} Период лекций: 14.02–21.03.`),
    r('g004', '4', '6', 'au-24', 'g3-1rf', 'lecture', 2, 2, 'Поток 1РФ.'),
    r('g005', '5', '3', 'au-41', 'g3-1rf', 'lecture', 3, 3, 'Поток 1РФ.'),
    r('g006', '8', '6', 'au-25', 'g3-1rf', 'lecture', 3, 2, 'Поток 1РФ.'),
    r('g007', '11', '8', 'au-41', 'g3-1rf', 'lecture', 5, 1, 'Поток 1РФ.'),
    r('g008', '3', '15', 'au-117', 'g3-1rf', 'lecture', 4, 6, `${STREAM_RF_KB} Лекция по ведомости деканата.`),

    // —— ПЭД, ауд. 45 (Демидчик 1–2 пг, Беленькая 3 пг) ——
    r('g010', '1', '1', 'au-45', 'g3-602kb', 'laboratory', 1, 0, W21),
    r('g011', '1', '1', 'au-45', 'g3-3rf', 'laboratory', 2, 0, W21),
    r('g012', '1', '1', 'au-45', 'g3-601kb', 'laboratory', 3, 0, W21),
    r('g013', '1', '1', 'au-45', 'g3-1rf', 'laboratory', 0, 2, W21),
    r('g014', '1', '1', 'au-45', 'g3-4rf', 'laboratory', 1, 2, W21),
    r('g015', '1', '1', 'au-45', 'g3-8rf', 'laboratory', 2, 2, W21),
    r('g016', '1', '1', 'au-45', 'g3-2rf', 'laboratory', 3, 2, W21),
    r('g017', '1', '2', 'au-45', 'g3-1rf', 'laboratory', 0, 4, `${W3C} Нечётная неделя: поток 4РФ, 3-я подгруппа.`),
    r('g018', '1', '2', 'au-45', 'g3-4rf', 'laboratory', 0, 4, W3N),
    r('g019', '1', '2', 'au-45', 'g3-602kb', 'laboratory', 1, 4, `${W3C} Нечётная неделя: поток 3РФ, 3-я подгруппа.`),
    r('g020', '1', '2', 'au-45', 'g3-3rf', 'laboratory', 1, 4, W3N),
    r('g021', '1', '2', 'au-45', 'g3-601kb', 'laboratory', 3, 4, W3C),
    r('g022', '1', '2', 'au-45', 'g3-8rf', 'laboratory', 3, 4, W3N),

    // —— ЦОС, ауд. 42 ——
    r('g030', '3', '4', 'au-42', 'g3-2rf', 'laboratory', 2, 0, W12),
    r('g031', '3', '4', 'au-42', 'g3-4rf', 'laboratory', 0, 2, W12),
    r('g032', '3', '4', 'au-42', 'g3-1rf', 'laboratory', 1, 2, W12),
    r('g033', '3', '4', 'au-42', 'g3-3rf', 'laboratory', 3, 2, W12),
    r('g034', '3', '10', 'au-42', 'g3-601kb', 'laboratory', 0, 4, W3N),
    r('g035', '3', '10', 'au-42', 'g3-3rf', 'laboratory', 3, 4, W3C),
    r('g036', '3', '10', 'au-42', 'g3-1rf', 'laboratory', 3, 4, W3N),
    r('g037', '3', '10', 'au-42', 'g3-601kb', 'laboratory', 5, 4, W12),
    r('g038', '3', '13', 'au-42', 'g3-4rf', 'laboratory', 5, 0, '4-я подгруппа.'),

    // —— СРиТИ, ауд. 49 ——
    r('g040', '2', '9', 'au-49', 'g3-3rf', 'laboratory', 0, 0, W3N),
    r('g041', '2', '9', 'au-49', 'g3-4rf', 'laboratory', 1, 2, W3N),
    r('g042', '2', '9', 'au-49', 'g3-8rf', 'laboratory', 2, 2, W3N),

    // —— СРиТИ, ауд. 56 ——
    r('g050', '2', '11', 'au-56', 'g3-3rf', 'laboratory', 0, 0, W12),
    r('g051', '2', '7', 'au-56', 'g3-4rf', 'laboratory', 5, 0, W12),
    r('g052', '2', '11', 'au-56', 'g3-1rf', 'laboratory', 1, 2, W12),
    r('g053', '2', '2', 'au-56', 'g3-1rf', 'laboratory', 2, 2, W3N),
    r('g054', '2', '2', 'au-56', 'g3-2rf', 'laboratory', 3, 2, W12),
    r('g055', '2', '11', 'au-56', 'g3-1rf', 'laboratory', 3, 2, W12),
    r('g056', '2', '7', 'au-56', 'g3-8rf', 'laboratory', 5, 4, W12),

    // —— ОСвСИВ, ТКиВ (лаб. — Малый) ——
    r('g060', '5', '3', 'au-44', 'g3-1rf', 'laboratory', 1, 2, W3N),
    r('g061', '4', '6', 'au-46', 'g3-1rf', 'laboratory', 1, 2, W3N),
    r('g062', '4', '6', 'au-46', 'g3-1rf', 'laboratory', 4, 4, W12),

    // —— КМЭДПиС, ауд. 49 ——
    r('g070', '8', '4', 'au-49', 'g3-1rf', 'laboratory', 4, 2, W21),
    r('g071', '8', '4', 'au-49', 'g3-1rf', 'laboratory', 4, 4, W3N),

    // —— РВПиС, ауд. 41 ——
    r('g080', '11', '8', 'au-41', 'g3-1rf', 'laboratory', 5, 3, W21),

    // —— УП «АиЦСхемотехника», 2 курс, ауд. 49 ——
    r('g090', '7', '6', 'au-49', 'g2-2rf', 'laboratory', 0, 3, '1-я подгруппа.'),
    r('g091', '7', '6', 'au-49', 'g2-1rf', 'laboratory', 1, 4, '2-я подгруппа.'),
    r('g092', '7', '6', 'au-49', 'g2-2rf', 'laboratory', 2, 4, '2-я подгруппа.'),
    r('g093', '7', '6', 'au-49', 'g2-1rf', 'laboratory', 3, 4, '1-я подгруппа.'),

    // —— Кураторский час ——
    r('g095', '6', '2', 'au-56', 'g3-1rf', 'practice', 0, 6, '3 курс, поток 1РФ.'),

    // —— Магистратура (Максимович) ——
    r(
      'g100',
      '9',
      '5',
      'au-41',
      'g6-mag-mat',
      'lecture',
      1,
      2,
      'Магистратура 7-06-0533-03 (МТМС). Лекции 24.02–24.03; лаб. 31.03, 05.05–19.05.',
    ),
    r(
      'g101',
      '9',
      '5',
      'au-41',
      'g6-mag-mat',
      'laboratory',
      4,
      2,
      'Магистратура 7-06-0533-03. Лабораторные 27.03–24.04, 08.05.',
    ),
    r(
      'g102',
      '10',
      '5',
      'au-41',
      'g6-mag-nas',
      'lecture',
      1,
      4,
      'Магистратура 7-06-0533-09 (аэрокосмос). Лекции 24.02–14.04, 28.04; лаб. 05.05–19.05.',
    ),
  ];
}
