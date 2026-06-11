import type { ScheduleState } from './scheduleSlice';

const STORAGE_KEY = 'unischedule:schedule';

/**
 * Загружает сохранённое состояние расписания из localStorage.
 * Возвращает undefined, если данных нет или они повреждены —
 * тогда стор использует initialState (моки).
 */
export function loadScheduleState(): ScheduleState | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.lessons)) return undefined;
    return { lessons: parsed.lessons };
  } catch {
    return undefined;
  }
}

/**
 * Сохраняет состояние расписания в localStorage.
 * Ошибки (например, переполнение квоты) проглатываются молча.
 */
export function saveScheduleState(state: ScheduleState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ lessons: state.lessons }));
  } catch {
    /* localStorage недоступен или переполнен — игнорируем */
  }
}
