import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Pencil, Trash2 } from 'lucide-react';
import LessonCard from './LessonCard';
import { getGroupName, getGroupCourse } from '../utils/scheduleUtils';
import type { Lesson } from '../types';

interface AdminLessonCardProps {
  lesson: Lesson;
  onEdit: (e: React.MouseEvent) => void;
  onDelete: (e: React.MouseEvent) => void;
}

export default function AdminLessonCard({ lesson, onEdit, onDelete }: AdminLessonCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: lesson.id,
    data: { lesson },
  });

  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;
  const groupInfo = `${getGroupName(lesson.groupId)} • ${getGroupCourse(lesson.groupId)} курс`;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group/card ${isDragging ? 'opacity-50 z-50' : ''}`}
    >
      <div {...listeners} {...attributes} className="cursor-grab active:cursor-grabbing" onClick={(e) => { if (!(e.target as HTMLElement).closest('button')) onEdit(e); }}>
        <LessonCard lesson={lesson} compact showGroupInfo={groupInfo} />
      </div>
      <div
        className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEdit(e); }}
          className="w-6 h-6 rounded bg-white/90 shadow flex items-center justify-center hover:bg-white text-gray-600 hover:text-blue-600"
          title="Редактировать"
        >
          <Pencil className="w-3 h-3" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onDelete(e); }}
          className="w-6 h-6 rounded bg-white/90 shadow flex items-center justify-center hover:bg-white text-gray-600 hover:text-red-600"
          title="Удалить"
        >
          <Trash2 className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
