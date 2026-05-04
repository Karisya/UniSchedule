import type { Lesson, Teacher, Subject, Auditorium, Group, DbUser } from '../types';
import { dateToWeekStartKey } from '../utils/weekKeys';

const MOCK_WEEK_START = dateToWeekStartKey(new Date());

/**
 * Кафедра РФиЦМТ: один набор преподавателей (id 1–13), весна, плановые часы — по сводке пользователя.
 */
export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Демидчик В.И.',
    fullNameOfficial: 'Демидчик Валерий Иосифович',
    position: 'доцент, к.т.н.',
    rate: 1,
    plannedHoursSpring: 592.9,
  },
  {
    id: '2',
    name: 'Беленькая С.С.',
    fullNameOfficial: 'Беленькая Светлана Сергеевна',
    position: 'старший преподаватель',
    rate: 1,
    plannedHoursSpring: 198,
  },
  {
    id: '3',
    name: 'Курило В.С.',
    fullNameOfficial: 'Курило Владимир Степанович',
    position: 'старший преподаватель',
    rate: 1,
    plannedHoursSpring: 51.2,
  },
  {
    id: '4',
    name: 'Полещук Н.Н.',
    fullNameOfficial: 'Полещук Наталья Николаевна',
    position: 'старший преподаватель',
    rate: 1,
    plannedHoursSpring: 715.6,
  },
  {
    id: '5',
    name: 'Максимович Е.С.',
    fullNameOfficial: 'Максимович Елена Степановна',
    position: 'зав. кафедрой, к.т.н., доцент',
    rate: 1,
    plannedHoursSpring: 54.5,
  },
  {
    id: '6',
    name: 'Малый С.В.',
    fullNameOfficial: 'Малый Сергей Владимирович',
    position: 'доцент, к.ф.-м.н.',
    rate: 0.5,
    plannedHoursSpring: 81.6,
  },
  {
    id: '7',
    name: 'Мигель А.С.',
    fullNameOfficial: 'Мигель Антон Сергеевич',
    position: 'старший преподаватель',
    rate: 1,
    plannedHoursSpring: 439.1,
  },
  {
    id: '8',
    name: 'Хейдоров И.Э.',
    fullNameOfficial: 'Хейдоров Игорь Эдуардович',
    position: 'доцент, к.ф.-м.н.',
    rate: 1,
    plannedHoursSpring: 77.1,
  },
  {
    id: '9',
    name: 'Черепанова Ю.В.',
    fullNameOfficial: 'Черепанова Юлия Витальевна',
    position: 'ассистент, внешний совместитель',
    rate: 0.5,
    plannedHoursSpring: 371.8,
  },
  {
    id: '10',
    name: 'Болотько Т.П.',
    fullNameOfficial: 'Болотько Тимофей Павлович',
    position: 'преподаватель-стажёр, внешний совместитель',
    rate: 0.5,
    plannedHoursSpring: 167,
  },
  {
    id: '11',
    name: 'Гринько С.С.',
    fullNameOfficial: 'Гринько С.С.',
    position: 'преподаватель',
    rate: 1,
  },
  {
    id: '12',
    name: 'Романов А.Ф.',
    fullNameOfficial: 'Романов Анатолий Филипович',
    position: 'доцент, к.т.н., внешний совместитель',
    rate: 0.5,
    plannedHoursSpring: 155.68,
  },
  {
    id: '13',
    name: 'Демьянюк Д.В.',
    fullNameOfficial: 'Демьянюк Дмитрий Валентинович',
    position: 'старший преподаватель, внешний совместитель',
    rate: 0.5,
    plannedHoursSpring: 165.5,
  },
  /** Лекционный слот ЦОС (пт 7-я): исполнитель задаётся расписанием деканата, не Полещук Н.Н. */
  {
    id: '15',
    name: 'Лектор ЦОС (деканат)',
    fullNameOfficial: 'Лекции по ЦОС — по основному расписанию',
  },
];

export const subjects: Subject[] = [
  { id: '1', name: 'Прикладная электродинамика (ПЭД)' },
  { id: '2', name: 'Статистическая радиофизика и теория информации (СРиТИ)' },
  { id: '3', name: 'Цифровая обработка сигналов (ЦОС)' },
  { id: '4', name: 'Теория колебаний и волн (ТКиВ)' },
  { id: '5', name: 'Обеспечение связи в системах Интернета вещей (ОСвСИВ)' },
  { id: '6', name: 'Кураторский час' },
  { id: '7', name: 'Учебная практика «Аналоговая и цифровая схемотехника»' },
  {
    id: '8',
    name: 'Компьютерное моделирование электродинамических процессов и систем (КМЭДПиС)',
  },
  { id: '9', name: 'Микроволновые системы и технологии (МСиТ)' },
  { id: '10', name: 'Направленные антенные системы с заданными параметрами (НАСЗП)' },
  { id: '11', name: 'Разработка веб-приложений и сервисов (РВПиС)' },
];

export const auditoriums: Auditorium[] = [
  { id: 'au-119', name: 'ауд. 119', compact: false, hasProjector: true, hasInteractiveBoard: true },
  { id: 'au-115', name: 'ауд. 115', compact: false, hasProjector: true, hasInteractiveBoard: true },
  { id: 'au-117', name: 'ауд. 117', compact: false, hasProjector: true, hasInteractiveBoard: true },
  { id: 'au-56', name: 'ауд. 56', compact: false, hasProjector: true, hasInteractiveBoard: false },
  { id: 'au-45', name: 'ауд. 45 (лаб.)', compact: true, hasProjector: false, hasInteractiveBoard: false },
  { id: 'au-42', name: 'ауд. 42 (лаб. ЦОС)', compact: false, hasProjector: true, hasInteractiveBoard: false },
  { id: 'au-44', name: 'ауд. 44 (лаб.)', compact: false, hasProjector: true, hasInteractiveBoard: false },
  { id: 'au-46', name: 'ауд. 46 (лаб.)', compact: true, hasProjector: false, hasInteractiveBoard: false },
  { id: 'au-49', name: 'ауд. 49', compact: false, hasProjector: true, hasInteractiveBoard: false },
  { id: 'au-25', name: 'ауд. 25', compact: false, hasProjector: true, hasInteractiveBoard: true },
  { id: 'au-41', name: 'ауд. 41', compact: false, hasProjector: true, hasInteractiveBoard: false },
  { id: 'au-24', name: 'ауд. 24', compact: false, hasProjector: false, hasInteractiveBoard: false },
];

/** Группы потоков: `course` — курс (фильтр); в названии без дублирования «2к/3к». */
export const groups: Group[] = [
  { id: 'g2-1rf', name: '1РФ (РФиИТ)', course: 2 },
  { id: 'g2-2rf', name: '2РФ (РФиИТ)', course: 2 },
  { id: 'g3-1rf', name: '1РФ (РФиИТ)', course: 3 },
  { id: 'g3-2rf', name: '2РФ (аэрокосмические технологии)', course: 3 },
  { id: 'g3-3rf', name: '3РФ (компьютерное проектирование)', course: 3 },
  { id: 'g3-4rf', name: '4РФ', course: 3 },
  { id: 'g3-8rf', name: '8РФ (информатика)', course: 3 },
  { id: 'g3-601kb', name: '601КБ (кибербезопасность, 3 курс)', course: 3 },
  { id: 'g3-602kb', name: '602КБ (кибербезопасность, 3 курс)', course: 3 },
  { id: 'g6-mag-mat', name: 'Магистратура · МТМС (7-06-0533-03)', course: 6 },
  { id: 'g6-mag-nas', name: 'Магистратура · аэрокосмические технологии (7-06-0533-09)', course: 6 },
];

/** Номера курсов, для которых есть группы в расписании (фильтры админки / преподавателя). */
export const SCHEDULE_COURSE_NUMBERS = [...new Set(groups.map((g) => g.course))].sort((a, b) => a - b);

export const users: DbUser[] = [
  { email: 'student@uni.ru', password: 'student', role: 'student', groupId: 'g3-1rf' },
  { email: 'teacher@uni.ru', password: 'teacher', role: 'teacher', teacherId: '1' },
  { email: 'admin@uni.ru', password: 'admin', role: 'administrator' },
];

const wk = MOCK_WEEK_START;

function lesson(
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
    weekStartKey: wk,
    extraInfo,
  };
}

/** Расписание: пары 0=1-я … 6=7-я; дни 0=Пн … 5=Сб. Чередование недель и подгруппы — в «Дополнительная информация» (без дубля предмета, аудитории, дня и пары). */
export const initialLessons: Lesson[] = [
  lesson('1001', '3', '4', 'au-42', 'g3-2rf', 'laboratory', 0, 0, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1002', '3', '4', 'au-42', 'g3-4rf', 'laboratory', 0, 2, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson(
    '1003',
    '2',
    '7',
    'au-115',
    'g3-1rf',
    'lecture',
    1,
    0,
    'Поток: специальности 1РФ, 2РФ, 3РФ, 4РФ, 8РФ.',
  ),
  lesson('1004', '2', '9', 'au-49', 'g3-3rf', 'laboratory', 0, 0, 'Нечётная неделя: 3-я подгруппа.'),
  lesson('1005', '2', '9', 'au-49', 'g3-4rf', 'laboratory', 0, 2, 'Нечётная неделя: 3-я подгруппа.'),
  lesson('1006', '2', '9', 'au-49', 'g3-4rf', 'laboratory', 1, 2, 'Нечётная неделя: 3-я подгруппа.'),
  lesson('1007', '3', '4', 'au-42', 'g3-1rf', 'laboratory', 1, 2, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1008', '1', '1', 'au-45', 'g3-602kb', 'laboratory', 1, 0, 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.'),
  lesson(
    '1051',
    '1',
    '2',
    'au-45',
    'g3-602kb',
    'laboratory',
    1,
    4,
    'Чётная неделя: поток 602КБ, 3-я подгруппа. Нечётная неделя: поток 3РФ, 3-я подгруппа. Совместно с Демидчиком В.И.',
  ),
  lesson('1009', '5', '3', 'au-44', 'g3-1rf', 'laboratory', 1, 2, '3-я подгруппа.'),
  lesson('1010', '4', '2', 'au-46', 'g3-1rf', 'laboratory', 1, 2, 'Нечётная неделя: 3-я подгруппа.'),
  lesson('1011', '7', '10', 'au-49', 'g2-2rf', 'laboratory', 0, 3, '1-я подгруппа.'),
  lesson(
    '1012',
    '2',
    '7',
    'au-117',
    'g3-1rf',
    'lecture',
    3,
    0,
    'Поток: 1–4, 8 радиофизические специальности. Период лекций: 14.02–21.03.',
  ),
  lesson(
    '1013',
    '3',
    '4',
    'au-42',
    'g3-2rf',
    'laboratory',
    2,
    0,
    'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа. По графику кафедры — уточнять совмещение с Демьянюком Д.В.',
  ),
  lesson('1014', '3', '4', 'au-42', 'g3-3rf', 'laboratory', 2, 2, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1015', '2', '11', 'au-56', 'g3-3rf', 'laboratory', 2, 0, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1016', '2', '9', 'au-49', 'g3-8rf', 'laboratory', 2, 2, 'Нечётная неделя: 3-я подгруппа.'),
  lesson('1017', '4', '2', 'au-24', 'g3-1rf', 'lecture', 2, 2, 'Лекции. Поток 1РФ.'),
  lesson('1018', '1', '1', 'au-45', 'g3-3rf', 'laboratory', 2, 0, 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.'),
  lesson('1019', '1', '1', 'au-45', 'g3-8rf', 'laboratory', 2, 2, 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.'),
  lesson(
    '1020',
    '8',
    '12',
    'au-49',
    'g3-1rf',
    'laboratory',
    4,
    3,
    'Курсовой проект. По согласованию графика разнесено с лабораторной Малого А.В. на предыдущую пару.',
  ),
  lesson('1021', '8', '6', 'au-49', 'g3-1rf', 'laboratory', 4, 2, 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.'),
  lesson('1022', '5', '3', 'au-41', 'g3-1rf', 'lecture', 3, 3, 'Лекции. Поток 1РФ.'),
  lesson(
    '1061',
    '8',
    '6',
    'au-56',
    'g3-1rf',
    'laboratory',
    4,
    5,
    'Нечётная неделя: 3-я подгруппа. Замена аудитории на 49 — по согласованию.',
  ),
  lesson('1023', '8', '6', 'au-25', 'g3-1rf', 'lecture', 3, 2, 'Лекции. Поток 1РФ.'),
  lesson('1024', '1', '1', 'au-45', 'g3-601kb', 'laboratory', 3, 0, 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.'),
  lesson('1025', '1', '1', 'au-45', 'g3-2rf', 'laboratory', 3, 2, 'Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.'),
  lesson(
    '1026',
    '1',
    '2',
    'au-45',
    'g3-601kb',
    'laboratory',
    3,
    4,
    'Чётная неделя: поток 601КБ, 3-я подгруппа. Нечётная неделя: поток 8РФ, 3-я подгруппа. Совместно с Демидчиком В.И.',
  ),
  lesson(
    '1027',
    '1',
    '2',
    'au-45',
    'g3-1rf',
    'laboratory',
    0,
    4,
    'Чётная неделя: поток 1РФ, 3-я подгруппа. Нечётная неделя: поток 4РФ, 3-я подгруппа. Совместно с Демидчиком В.И.',
  ),
  lesson('1028', '4', '2', 'au-46', 'g3-1rf', 'laboratory', 4, 4, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson(
    '1030',
    '9',
    '5',
    'au-41',
    'g6-mag-mat',
    'lecture',
    1,
    2,
    'МСиТ, магистратура 7-06-0533-03 (МТМС), 9 студентов. Во вторник по парам: лекции 24.02–24.03 (3-я пара); лабораторная работа 31.03, 05.05–19.05 и лекции 07.04–14.04, 28.04 (4-я); лекции 24.02–24.03 и лабораторная работа 31.03–14.04, 28.04 (5-я); лабораторная работа 07.04–14.04, 28.04 (6-я). Пятница 3-я пара — отдельная строка расписания (лабораторная работа).',
  ),
  lesson(
    '1062',
    '9',
    '5',
    'au-41',
    'g6-mag-mat',
    'laboratory',
    4,
    2,
    'Лабораторная работа, даты 27.03–24.04, 08.05. Магистратура 7-06-0533-03.',
  ),
  lesson(
    '1031',
    '10',
    '5',
    'au-41',
    'g6-mag-nas',
    'lecture',
    1,
    4,
    'НАСЗП, магистратура 7-06-0533-09 (аэрокосмос), 5 студентов. Чередование по аудитории с потоком МСиТ. Лекции 24.02–14.04, 28.04; лабораторные работы 05.05–19.05.',
  ),
  lesson('1032', '2', '7', 'au-56', 'g3-1rf', 'laboratory', 0, 2, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1033', '2', '7', 'au-56', 'g3-8rf', 'laboratory', 5, 4, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson(
    '1034',
    '2',
    '11',
    'au-56',
    'g3-1rf',
    'laboratory',
    4,
    2,
    'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа. По расписанию — совместное занятие.',
  ),
  lesson('1035', '2', '7', 'au-56', 'g3-4rf', 'laboratory', 5, 0, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1036', '11', '8', 'au-41', 'g3-1rf', 'laboratory', 5, 3, 'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.'),
  lesson('1050', '11', '8', 'au-41', 'g3-1rf', 'lecture', 5, 1, 'Лекции. Поток 1РФ.'),
  lesson(
    '1037',
    '11',
    '8',
    'au-49',
    'g3-1rf',
    'laboratory',
    4,
    5,
    'Нечётная неделя: 3-я подгруппа.',
  ),
  lesson('1039', '6', '2', 'au-56', 'g3-1rf', 'practice', 0, 6, 'Кураторский час. 3 курс, поток 1РФ.'),
  lesson(
    '1040',
    '1',
    '1',
    'au-119',
    'g3-1rf',
    'lecture',
    0,
    1,
    'Общий поток: специальности 1РФ, 2РФ, 3РФ, 4РФ, 8РФ и группы 601КБ, 602КБ (3 курс).',
  ),
  lesson('1041', '3', '10', 'au-42', 'g3-601kb', 'laboratory', 0, 4, 'Нечётная неделя: 3-я подгруппа.'),
  lesson(
    '1042',
    '3',
    '10',
    'au-42',
    'g3-3rf',
    'laboratory',
    1,
    4,
    'Чётная неделя: поток 3РФ, 3-я подгруппа. Нечётная неделя: поток 1РФ, 3-я подгруппа.',
  ),
  lesson(
    '1043',
    '3',
    '10',
    'au-42',
    'g3-601kb',
    'laboratory',
    5,
    5,
    'Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.',
  ),
  lesson('1044', '7', '10', 'au-49', 'g2-1rf', 'laboratory', 1, 5, '2-я подгруппа.'),
  lesson('1045', '7', '10', 'au-49', 'g2-2rf', 'laboratory', 2, 4, '2-я подгруппа.'),
  lesson('1046', '7', '10', 'au-49', 'g2-1rf', 'laboratory', 3, 4, '1-я подгруппа.'),
  lesson(
    '1049',
    '3',
    '15',
    'au-117',
    'g3-1rf',
    'lecture',
    4,
    6,
    'Поток: 1РФ, 2РФ, 3РФ, 4РФ, 8РФ, 601КБ. Лекцию читает другой преподаватель. Лабораторный практикум по ЦОС у Полещук Н.Н. (аудитория 42).',
  ),
];

/** Сколько академических часов стоит одна ячейка расписания при сверке с планом. */
export const ACADEMIC_HOURS_PER_SCHEDULE_SLOT = 2;

/** Плановые часы за семестр по комбинации преподаватель + предмет + тип + группа (индивидуальный план). */
export type TeacherLessonPlanBucket = {
  teacherId: string;
  subjectId: string;
  type: Lesson['type'];
  groupId: string;
  plannedHours: number;
};

const PLAN_HOUR_DEFAULTS: Record<Lesson['type'], number> = {
  lecture: 64,
  laboratory: 40,
  practice: 24,
};

/**
 * Явные часы по строке плана (ключ teacherId|subjectId|type|groupId).
 * Пример: Демидчик, ПЭД, лабораторная для потока 2РФ — 32 ч; одна пара в сетке = 2 ч → 2/32.
 */
const TEACHER_LESSON_PLAN_OVERRIDES: Record<string, number> = {
  '1|1|laboratory|g3-2rf': 32,
};

export function buildTeacherLessonPlanBuckets(lessons: Lesson[]): TeacherLessonPlanBucket[] {
  const seen = new Map<string, TeacherLessonPlanBucket>();
  for (const l of lessons) {
    const key = `${l.teacherId}|${l.subjectId}|${l.type}|${l.groupId}`;
    if (seen.has(key)) continue;
    const planned = TEACHER_LESSON_PLAN_OVERRIDES[key] ?? PLAN_HOUR_DEFAULTS[l.type];
    seen.set(key, {
      teacherId: l.teacherId,
      subjectId: l.subjectId,
      type: l.type,
      groupId: l.groupId,
      plannedHours: planned,
    });
  }
  return [...seen.values()];
}

/** План по всем уникальным «ведрам» из текущего расписания; для точности добавляйте переопределения выше. */
export const TEACHER_LESSON_PLAN_BUCKETS: TeacherLessonPlanBucket[] =
  buildTeacherLessonPlanBuckets(initialLessons);
