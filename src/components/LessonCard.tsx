import { User, MapPin, BookOpen } from 'lucide-react';
import {
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getLessonTypeLabel,
  getLessonTypeColors,
} from '../utils/scheduleUtils';
import type { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  showProgress?: boolean;
  compact?: boolean;
}

export default function LessonCard({ lesson, showProgress = false, compact = false }: LessonCardProps) {
  const colors = getLessonTypeColors(lesson.type);

  return (
    <div
      className={`rounded-lg p-3 ${colors.bg} ${colors.text} border border-white/50 ${
        compact ? 'text-xs' : 'text-sm'
      }`}
    >
      <p className="font-semibold mb-2 truncate">{getSubjectName(lesson.subjectId)}</p>
      <div className="space-y-1">
        <p className="flex items-center gap-1.5 truncate">
          <User className="w-3.5 h-3.5 flex-shrink-0" />
          {getTeacherName(lesson.teacherId)}
        </p>
        <p className="flex items-center gap-1.5 truncate">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          {getAuditoriumName(lesson.auditoriumId)}
        </p>
      </div>
      <p className={`flex items-center gap-1.5 mt-2 ${colors.text} font-medium`}>
        <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
        {getLessonTypeLabel(lesson.type)}
      </p>
      {showProgress && lesson.progress != null && (
        <div className="mt-2">
          <p className="text-xs mb-1">Прогресс</p>
          <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-current rounded-full transition-all"
              style={{ width: `${lesson.progress}%` }}
            />
          </div>
          <p className="text-xs mt-0.5">{lesson.progress}%</p>
        </div>
      )}
    </div>
  );
}
