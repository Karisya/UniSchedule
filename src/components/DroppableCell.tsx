import { useDroppable } from '@dnd-kit/core';
import type { Lesson } from '../types';
import AdminLessonCard from './AdminLessonCard';

interface DroppableCellProps {
  dayOfWeek: number;
  timeSlot: number;
  lesson: Lesson | null;
  isConflict: boolean;
  onEdit: (lesson: Lesson) => void;
  onDelete: (lesson: Lesson) => void;
  onEmptyClick: (dayOfWeek: number, timeSlot: number) => void;
  /** false — ячейка «+» не активна (нет выбора курса/группы) */
  scheduleReady?: boolean;
}

export default function DroppableCell({
  dayOfWeek,
  timeSlot,
  lesson,
  isConflict,
  onEdit,
  onDelete,
  onEmptyClick,
  scheduleReady = true,
}: DroppableCellProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `cell-${dayOfWeek}-${timeSlot}`,
    data: { dayOfWeek, timeSlot },
  });

  return (
    <td
      ref={setNodeRef}
      className={`p-2 border-b border-gray-200 align-top min-w-[120px] transition-colors ${
        isConflict ? 'bg-red-100' : isOver ? 'bg-primary-100' : ''
      }`}
    >
      {lesson ? (
        <AdminLessonCard
          lesson={lesson}
          onEdit={() => onEdit(lesson)}
          onDelete={() => onDelete(lesson)}
        />
      ) : (
        <div
          onClick={() => scheduleReady && onEmptyClick(dayOfWeek, timeSlot)}
          className={`h-16 rounded min-h-[60px] flex items-center justify-center text-xs transition-colors ${
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
