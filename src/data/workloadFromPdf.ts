/**
 * Сводка по кафедре (весна): часы из объединённого описания пользователя +
 * каталог дисциплин. Id преподавателей совпадают с `store/mockData.ts`.
 */
export interface CatalogPlanRow {
  discipline: string;
  direction: string;
  profileCode?: string;
  specialization: string;
  totalHoursListed?: number;
}

export const CATALOG_PLAN_ROWS: CatalogPlanRow[] = [
  {
    discipline: 'Прикладная электродинамика (итого по потокам)',
    direction: 'РФ и КТ / КБ',
    specialization: 'Демидчик В.И. — совокупная нагрузка по ПЭД',
    totalHoursListed: 592.9,
  },
  {
    discipline: 'ПЭД и СРиТИ (лабораторные)',
    direction: 'РФ и КТ',
    specialization: 'Беленькая С.С. — ПЭД (3 пг, ауд. 45) и СРиТИ (ауд. 56)',
    totalHoursListed: 198,
  },
  {
    discipline: 'Цифровая обработка сигналов',
    direction: 'РФ и КТ',
    specialization: 'Полещук Н.Н. — лабораторный комплекс ЦОС',
    totalHoursListed: 715.6,
  },
  {
    discipline: 'Статистическая радиофизика и теория информации',
    direction: 'РФ и КТ',
    specialization: 'Мигель А.С. — СРиТИ',
    totalHoursListed: 439.1,
  },
];

export interface TeacherWorkloadRowParsed {
  teacherId: string;
  discipline: string;
  specialization?: string;
  semesterTotalHours?: number;
  note?: string;
}

export const TEACHER_WORKLOAD_FROM_PLAN: TeacherWorkloadRowParsed[] = [
  { teacherId: '1', discipline: 'Прикладная электродинамика (ПЭД)', semesterTotalHours: 592.9 },
  {
    teacherId: '2',
    discipline: 'Прикладная электродинамика (ПЭД)',
    note: 'лабораторные 3-й подгруппы, ауд. 45',
    semesterTotalHours: undefined,
  },
  {
    teacherId: '2',
    discipline: 'Статистическая радиофизика и теория информации (СРиТИ)',
    note: 'лаб. 1РФ 3пг, 2РФ (ауд. 56) по графику',
    semesterTotalHours: undefined,
  },
  { teacherId: '2', discipline: 'Кураторский час', note: '3к 1РФ', semesterTotalHours: undefined },
  { teacherId: '3', discipline: 'Обеспечение связи в системах Интернета вещей (ОСвСИВ)', semesterTotalHours: 51.2 },
  { teacherId: '4', discipline: 'Цифровая обработка сигналов (ЦОС)', semesterTotalHours: 715.6 },
  {
    teacherId: '4',
    discipline: 'Компьютерное моделирование электродинамических процессов и систем (КМЭДПиС)',
    note: 'лаб. пт 3-я (1/2 пг) по графику — у Малого С.В.; у Полещук — слот в ауд. 56/49 в общем плане',
    semesterTotalHours: undefined,
  },
  { teacherId: '5', discipline: 'Микроволновые системы и технологии (МСиТ)', semesterTotalHours: 31.7 },
  {
    teacherId: '5',
    discipline: 'Направленные антенные системы с заданными параметрами',
    semesterTotalHours: 22.8,
  },
  { teacherId: '6', discipline: 'КМЭДПиС (весна + осень/смежные строки)', semesterTotalHours: 81.6 },
  {
    teacherId: '7',
    discipline: 'Статистическая радиофизика и теория информации (СРиТИ)',
    note: 'в плане также ПИ и КБ (лаборатории и практика по сводке); в сетке — потоки 1–4, 8 РФ и лаборатории у Черепановой Ю.В. (3-я подгруппа)',
    semesterTotalHours: 439.1,
  },
  {
    teacherId: '8',
    discipline: 'Разработка веб-приложений и сервисов (РВПиС)',
    semesterTotalHours: 77.1,
  },
  {
    teacherId: '9',
    discipline: 'Нагрузка по плану (в т.ч. ЦОС / смежные строки)',
    semesterTotalHours: 371.8,
    note: 'СРиТИ — лаб. 3-й подгруппы по расписанию; суммарно ~371,8 ч в сводке пользователя',
  },
  {
    teacherId: '10',
    discipline: 'Учебная практика «Аналоговая и цифровая схемотехника»',
    semesterTotalHours: 167,
  },
  {
    teacherId: '10',
    discipline: 'Цифровая обработка сигналов (3-я подгруппа)',
    note: 'нагрузка в общем плане кафедры',
    semesterTotalHours: undefined,
  },
  {
    teacherId: '11',
    discipline: 'Статистическая радиофизика и теория информации',
    note: 'отдельная строка плана не указана',
    semesterTotalHours: undefined,
  },
  { teacherId: '12', discipline: 'КМЭДПиС', semesterTotalHours: 155.68 },
  { teacherId: '13', discipline: 'Цифровая обработка сигналов (ЦОС)', semesterTotalHours: 165.5 },
];
