import { useDroppable } from '@dnd-kit/core';
import type { Lesson } from '../types';
import DraggableLessonCard from './DraggableLessonCard';

interface DroppableCellProps {
  dayOfWeek: number;
  timeSlot: number;
  lesson: Lesson | null;
  isConflict: boolean;
  onEdit?: (lesson: Lesson) => void;
}

export default function DroppableCell({
  dayOfWeek,
  timeSlot,
  lesson,
  isConflict,
  onEdit,
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
        <div onDoubleClick={() => onEdit?.(lesson)}>
          <DraggableLessonCard lesson={lesson} />
        </div>
      ) : (
        <div className="h-16 bg-gray-50/50 rounded min-h-[60px]" />
      )}
    </td>
  );
}
