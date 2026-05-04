/** Фиксированные доли ширины: колонка «Время» + 6 равных дней (table-layout: fixed). */
export function ScheduleWeekColGroup() {
  const dayPct = (100 - 11) / 6;
  return (
    <colgroup>
      <col style={{ width: '11%' }} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <col key={i} style={{ width: `${dayPct}%` }} />
      ))}
    </colgroup>
  );
}

export function ScheduleDayColGroup() {
  return (
    <colgroup>
      <col style={{ width: '22%' }} />
      <col style={{ width: '78%' }} />
    </colgroup>
  );
}

/** 7 колонок календаря месяца (Пн–Вс) */
export function ScheduleMonthColGroup() {
  const pct = 100 / 7;
  return (
    <colgroup>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <col key={i} style={{ width: `${pct}%` }} />
      ))}
    </colgroup>
  );
}

/** Ограничение ширины в ячейке table-fixed; высота по содержимому карточки. */
export const scheduleCellContentClass = 'w-full min-w-0';

/** Пустой слот: та же минимальная «кнопка +», что раньше (~h-16). */
export const scheduleEmptySlotClass =
  'w-full min-w-0 min-h-[4rem] rounded-lg flex items-center justify-center text-xs';
