import type { AdminTeacherWorkloadRow } from '../utils/scheduleUtils';
import { ACADEMIC_HOURS_PER_SCHEDULE_SLOT } from '../store/mockData';

interface AdminWorkloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  rows: AdminTeacherWorkloadRow[];
  /** Сумма по преподавателям, у которых задан план (как на статус-баре) */
  sumScheduledScoped: number;
  sumPlannedScoped: number;
  totalScheduledHours: number;
}

export default function AdminWorkloadModal({
  isOpen,
  onClose,
  rows,
  sumScheduledScoped,
  sumPlannedScoped,
  totalScheduledHours,
}: AdminWorkloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Закрыть"
        onClick={onClose}
      />
      <div
        className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[85vh] flex flex-col border border-gray-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-workload-title"
      >
        <div className="p-4 border-b border-gray-200 flex items-start justify-between gap-4">
          <div>
            <h2 id="admin-workload-title" className="text-lg font-semibold text-gray-900">
              Прогресс по преподавателям
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              В расписании:{' '}
              <strong className="font-medium text-gray-800">{totalScheduledHours}</strong> акад. ч по
              всем ячейкам ({ACADEMIC_HOURS_PER_SCHEDULE_SLOT} ч на пару).
              {sumPlannedScoped > 0 && (
                <>
                  {' '}
                  Сверка с планом (только преподаватели с известным планом):{' '}
                  <strong className="font-medium text-gray-800">
                    {sumScheduledScoped} / {sumPlannedScoped}
                  </strong>{' '}
                  акад. ч.
                </>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-gray-500 hover:text-gray-800 text-sm font-medium"
          >
            Закрыть
          </button>
        </div>

        <div className="overflow-auto flex-1 p-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-600">
                <th className="py-2 pr-3 font-medium">Преподаватель</th>
                <th className="py-2 pr-3 font-medium tabular-nums">Ячеек</th>
                <th className="py-2 pr-3 font-medium tabular-nums">Занесено, ч</th>
                <th className="py-2 pr-3 font-medium tabular-nums">План, ч</th>
                <th className="py-2 font-medium tabular-nums">%</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.teacherId} className="border-b border-gray-100 hover:bg-gray-50/80">
                  <td className="py-2 pr-3 text-gray-900">{r.teacherName}</td>
                  <td className="py-2 pr-3 tabular-nums text-gray-700">{r.lessonSlots}</td>
                  <td className="py-2 pr-3 tabular-nums text-gray-800 font-medium">
                    {r.scheduledHours}
                  </td>
                  <td className="py-2 pr-3 tabular-nums text-gray-700">
                    {r.plannedHours != null ? r.plannedHours : '—'}
                  </td>
                  <td className="py-2 tabular-nums">
                    {r.percent != null ? (
                      <span
                        className={
                          r.percent >= 100
                            ? 'text-emerald-700 font-medium'
                            : r.percent >= 80
                              ? 'text-amber-700'
                              : 'text-gray-800'
                        }
                      >
                        {r.percent}%
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 && (
            <p className="text-sm text-gray-500 py-8 text-center">Нет данных по нагрузке.</p>
          )}
        </div>

        <div className="p-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
          План: весенние часы из карточки преподавателя или сумма строк индивидуального плана по
          предметам и группам. Если план не задан, в колонках «План» и «%» стоит прочерк.
        </div>
      </div>
    </div>
  );
}
