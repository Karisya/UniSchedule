/** Локальная дата YYYY-MM-DD (без сдвига UTC). */
export function formatLocalDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** Ключ недели: дата понедельника той же календарной недели, что и date. */
export function dateToWeekStartKey(date: Date): string {
  const x = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = x.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  x.setDate(x.getDate() + diff);
  return formatLocalDateKey(x);
}

export function weekStartKeyToMondayDate(weekStartKey: string): Date {
  const [y, m, d] = weekStartKey.split('-').map(Number);
  return new Date(y, m - 1, d, 12, 0, 0, 0);
}

/**
 * Локальная календарная дата проведения занятия (неделя с `weekStartKey` — понедельник, + смещение дня).
 * Используется для конфликтов: одно и то же время = одна дата и один индекс пары.
 */
export function lessonCalendarDateKey(lesson: { weekStartKey: string; dayOfWeek: number }): string {
  const monday = weekStartKeyToMondayDate(lesson.weekStartKey);
  const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + lesson.dayOfWeek);
  return formatLocalDateKey(d);
}

/** Сдвиг на deltaWeeks календарных недель (weekStartKey — понедельник). */
export function addWeeksToWeekStartKey(weekStartKey: string, deltaWeeks: number): string {
  const dt = weekStartKeyToMondayDate(weekStartKey);
  dt.setDate(dt.getDate() + deltaWeeks * 7);
  return formatLocalDateKey(dt);
}

/** Сколько календарных недель между двумя понедельниками (для добавления к weekOffset). */
export function deltaWeekStartsBetweenKeys(fromMondayKey: string, toMondayKey: string): number {
  const a = weekStartKeyToMondayDate(fromMondayKey).getTime();
  const b = weekStartKeyToMondayDate(toMondayKey).getTime();
  const msWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.round((b - a) / msWeek);
}

/** 1-я неделя семестра — нечётная, 2-я — чётная и т.д. */
export function academicWeekParityRu(weekNumber1Based: number): 'нечётная' | 'чётная' {
  return weekNumber1Based % 2 === 1 ? 'нечётная' : 'чётная';
}

/** Номер учебной недели относительно понедельника 1-й недели семестера (может быть < 1 или > planned). */
export function academicWeekNumber1Based(
  viewWeekStartKey: string,
  semesterFirstMondayKey: string,
): number {
  return deltaWeekStartsBetweenKeys(semesterFirstMondayKey, viewWeekStartKey) + 1;
}

/** Для шапки: только тип недели (1-я от начала семестра — нечётная, 2-я — чётная; «чёрная» = чётная). */
export function formatAcademicWeekLine(
  viewWeekStartKey: string,
  semesterFirstMondayKey: string,
): string {
  const n = academicWeekNumber1Based(viewWeekStartKey, semesterFirstMondayKey);
  const parity = academicWeekParityRu(n);
  if (parity === 'нечётная') return 'Нечётная';
  return 'Чётная';
}
