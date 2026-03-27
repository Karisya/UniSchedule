import { useEffect, useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import type { ConflictEntry } from '../utils/scheduleUtils';
import {
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getGroupName,
} from '../utils/scheduleUtils';

function conflictKey(c: ConflictEntry): string {
  return `${c.weekStartKey}\u0001${c.dayOfWeek}\u0001${c.timeSlot}`;
}

interface ConflictModalProps {
  isOpen: boolean;
  conflicts: ConflictEntry[];
  onClose: () => void;
  onRemoveLesson: (lessonId: string) => void;
}

export default function ConflictModal({
  isOpen,
  conflicts,
  onClose,
  onRemoveLesson,
}: ConflictModalProps) {
  const [openFixKey, setOpenFixKey] = useState<string | null>(null);
  const [checkedRemoveIds, setCheckedRemoveIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isOpen) {
      setOpenFixKey(null);
      setCheckedRemoveIds(new Set());
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && conflicts.length === 0) onClose();
  }, [isOpen, conflicts.length, onClose]);

  useEffect(() => {
    if (openFixKey && !conflicts.some((c) => conflictKey(c) === openFixKey)) {
      setOpenFixKey(null);
      setCheckedRemoveIds(new Set());
    }
  }, [conflicts, openFixKey]);

  if (!isOpen) return null;

  const toggleFix = (c: ConflictEntry) => {
    const k = conflictKey(c);
    if (openFixKey === k) {
      setOpenFixKey(null);
      setCheckedRemoveIds(new Set());
      return;
    }
    setOpenFixKey(k);
    setCheckedRemoveIds(new Set());
  };

  const handleDeleteChecked = (lessonsInSlot: { id: string }[]) => {
    const ids = [...checkedRemoveIds].filter((id) => lessonsInSlot.some((l) => l.id === id));
    if (ids.length === 0) return;
    if (
      !window.confirm(
        `Удалить из расписания записей: ${ids.length}. Продолжить? Отменить это действие будет нельзя.`,
      )
    ) {
      return;
    }
    for (const id of ids) onRemoveLesson(id);
    setCheckedRemoveIds(new Set());
  };

  const toggleCheck = (id: string) => {
    setCheckedRemoveIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
          <h2 className="text-lg font-semibold text-gray-900">Обнаружены конфликты расписания</h2>
        </div>
        <div className="overflow-y-auto p-4 space-y-3">
          {conflicts.map((c) => {
            const k = conflictKey(c);
            const expanded = openFixKey === k;
            return (
              <div key={k} className="rounded-lg border border-red-200 bg-red-50 overflow-hidden text-sm">
                <div className="p-3">
                  <p className="font-medium text-red-900 mb-1">
                    {c.types.map((t) => (t === 'room' ? 'Аудитория' : 'Преподаватель')).join(' · ')}
                  </p>
                  <p className="text-red-800 mb-3">{c.description}</p>
                  <button
                    type="button"
                    onClick={() => toggleFix(c)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-red-300 text-red-900 font-medium hover:bg-red-100/80"
                  >
                    {expanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Скрыть исправление
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Исправить
                      </>
                    )}
                  </button>
                </div>
                {expanded && (
                  <div className="border-t border-red-200 bg-white p-3 space-y-4 text-gray-900">
                    <p className="text-xs text-gray-600">
                      Занятия в одном слоте (неделя {c.weekStartKey}):
                    </p>
                    <ul className="space-y-2">
                      {c.lessons.map((l) => (
                        <li
                          key={l.id}
                          className="flex gap-2 items-start rounded-md border border-gray-200 p-2 text-xs"
                        >
                          <input
                            type="checkbox"
                            checked={checkedRemoveIds.has(l.id)}
                            onChange={() => toggleCheck(l.id)}
                            className="mt-0.5 rounded border-gray-300"
                            aria-label="Отметить для удаления"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium truncate">{getSubjectName(l.subjectId)}</p>
                            <p className="text-gray-600">
                              {getGroupName(l.groupId)} · {getTeacherName(l.teacherId)} ·{' '}
                              {getAuditoriumName(l.auditoriumId)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      disabled={checkedRemoveIds.size === 0}
                      onClick={() => handleDeleteChecked(c.lessons)}
                      className="w-full py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Удалить отмеченные ({checkedRemoveIds.size})
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="p-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
