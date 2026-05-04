import { useDroppable } from '@dnd-kit/core';
import type { Lesson } from '../types';
import AdminLessonCard from './AdminLessonCard';
import { scheduleCellContentClass, scheduleEmptySlotClass } from './ScheduleGridColGroups';

interface DroppableCellProps {
  dayOfWeek: number;
  timeSlot: number;
  lessons: Lesson[];
  isConflict: boolean;
  onEdit: (lesson: Lesson) => void;
  onDelete: (lesson: Lesson) => void;
  onEmptyClick: (dayOfWeek: number, timeSlot: number) => void;
  /** Показать ссылку «ещё в этот слот», если занятие уже есть (только админка). */
  onAddAnother?: (dayOfWeek: number, timeSlot: number) => void;
  /** false — ячейка «+» не активна (нет выбора курса/группы) */
  scheduleReady?: boolean;
  /** Подсветка ячейки после перехода из поиска */
  flashLessonId?: string | null;
}

export default function DroppableCell({
  dayOfWeek,
  timeSlot,
  lessons,
  isConflict,
  onEdit,
  onDelete,
  onEmptyClick,
  onAddAnother,
  scheduleReady = true,
  flashLessonId = null,
}: DroppableCellProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `cell-${dayOfWeek}-${timeSlot}`,
    data: { dayOfWeek, timeSlot },
  });

  const isFlash =
    flashLessonId != null && lessons.some((l) => l.id === flashLessonId);

  const dropHintClass =
    !isConflict && isOver ? 'bg-primary-100/90 ring-2 ring-inset ring-primary-400' : '';

  const hasLessons = lessons.length > 0;

  return (
    <td
      ref={setNodeRef}
      className={[
        'border-b border-r border-gray-200 align-top min-w-0 transition-colors',
        isConflict ? 'bg-red-100 p-1.5 ring-2 ring-inset ring-red-500' : 'p-2',
        dropHintClass,
        isFlash ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-amber-100 rounded-md z-[1]' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {hasLessons ? (
        <div className={`${scheduleCellContentClass} flex flex-col gap-2`}>
          {lessons.map((lesson) => (
            <div key={lesson.id} data-schedule-lesson-slot={lesson.id}>
              <AdminLessonCard
                lesson={lesson}
                onEdit={() => onEdit(lesson)}
                onDelete={() => onDelete(lesson)}
              />
            </div>
          ))}
          {scheduleReady && onAddAnother ? (
            <button
              type="button"
              onClick={() => onAddAnother(dayOfWeek, timeSlot)}
              className="w-full shrink-0 rounded-md border border-dashed border-primary-300/80 py-1.5 text-xs text-primary-700 hover:bg-primary-50/80"
            >
              + Добавить в этот слот
            </button>
          ) : null}
        </div>
      ) : (
        <div
          onClick={() => scheduleReady && onEmptyClick(dayOfWeek, timeSlot)}
          className={`${scheduleEmptySlotClass} transition-colors ${
            scheduleReady
              ? 'bg-gray-50/50 cursor-pointer hover:bg-primary-50 text-gray-400 hover:text-primary-500'
              : 'bg-gray-100 cursor-not-allowed text-gray-300'
          }`}
        >
          +
        </div>
      )}
    </td>
  );
}
