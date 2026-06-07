import type { Lesson, Teacher, Subject, Auditorium, Group, DbUser } from '../types';
import { dateToWeekStartKey } from '../utils/weekKeys';
import { buildSpring2026GraphicLessons } from '../data/spring2026GraphicLessons';

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

/** Расписание текущей недели по «Графику работы весна 2026» (сетка + ауд. 41–56). */
export const initialLessons: Lesson[] = buildSpring2026GraphicLessons(MOCK_WEEK_START);

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
