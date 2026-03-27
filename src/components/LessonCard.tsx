import { User, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import {
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getAuditoriumDetailLine,
  getLessonTypeLabel,
  getLessonTypeColors,
  getGroupName,
  getGroupCourse,
  getLessonProgressPercent,
} from '../utils/scheduleUtils';
import type { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  showProgress?: boolean;
  compact?: boolean;
  showGroupInfo?: string;
  /** Расписание преподавателя: курс·группа, без строки ФИО препа */
  teacherMode?: boolean;
  /** Справочные детали аудитории и поле «Доп. информация» — только преподаватель / администратор */
  showStaffRoomDetails?: boolean;
}

export default function LessonCard({
  lesson,
  showProgress = false,
  compact = false,
  showGroupInfo,
  teacherMode = false,
  showStaffRoomDetails,
}: LessonCardProps) {
  const colors = getLessonTypeColors(lesson.type);
  const courseGroupLine = `${getGroupCourse(lesson.groupId)} курс · ${getGroupName(lesson.groupId)}`;
  const roomExtrasVisible = showStaffRoomDetails ?? teacherMode;
  const audDetails = roomExtrasVisible ? getAuditoriumDetailLine(lesson.auditoriumId) : '';
  const extraInfoTrimmed = roomExtrasVisible ? lesson.extraInfo?.trim() : '';
  const progressPct = getLessonProgressPercent(lesson);

  return (
    <div
      className={`rounded-lg p-3 ${colors.bg} ${colors.text} border border-white/50 ${
        compact ? 'text-xs' : 'text-sm'
      }`}
    >
      <p className="font-semibold mb-2 truncate">{getSubjectName(lesson.subjectId)}</p>

      {teacherMode ? (
        <p className="flex items-start gap-1.5 text-xs font-medium opacity-95 mb-2 leading-snug">
          <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <span>{courseGroupLine}</span>
        </p>
      ) : (
        <div className="space-y-1">
          <p className="flex items-center gap-1.5 truncate">
            <User className="w-3.5 h-3.5 flex-shrink-0" />
            {getTeacherName(lesson.teacherId)}
          </p>
        </div>
      )}

      <div className="space-y-1">
        <p className="flex items-center gap-1.5 truncate">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          {getAuditoriumName(lesson.auditoriumId)}
        </p>
        {audDetails && (
          <p className="text-[10px] leading-tight opacity-85 pl-[22px]">{audDetails}</p>
        )}
        {extraInfoTrimmed && (
          <p className="text-[10px] leading-tight opacity-90 pl-[22px] whitespace-pre-wrap break-words">
            {extraInfoTrimmed}
          </p>
        )}
      </div>

      {!teacherMode && showGroupInfo && (
        <p className="text-xs text-gray-600 mt-1 truncate">{showGroupInfo}</p>
      )}

      <p className={`flex items-center gap-1.5 mt-2 ${colors.text} font-medium`}>
        <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
        {getLessonTypeLabel(lesson.type)}
      </p>
      {showProgress && (
        <div className="mt-2">
          <p className="text-xs mb-1">Прогресс</p>
          <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-current rounded-full transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs mt-0.5">{progressPct}%</p>
        </div>
      )}
    </div>
  );
}
