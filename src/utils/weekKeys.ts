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

/** Сдвиг на deltaWeeks календарных недель (weekStartKey — понедельник). */
export function addWeeksToWeekStartKey(weekStartKey: string, deltaWeeks: number): string {
  const dt = weekStartKeyToMondayDate(weekStartKey);
  dt.setDate(dt.getDate() + deltaWeeks * 7);
  return formatLocalDateKey(dt);
}
