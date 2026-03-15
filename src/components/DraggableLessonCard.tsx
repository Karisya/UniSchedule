import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import LessonCard from './LessonCard';
import type { Lesson } from '../types';

interface DraggableLessonCardProps {
  lesson: Lesson;
}

export default function DraggableLessonCard({ lesson }: DraggableLessonCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: lesson.id,
    data: { lesson },
  });

  const style = transform
    ? { transform: CSS.Translate.toString(transform) }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-50 z-50' : ''}`}
    >
      <LessonCard lesson={lesson} compact />
    </div>
  );
}
