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
  getLessonProgressInfo,
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
  /** Для расчёта «факт / план» по индивидуальному плану преподавателя (все занятия из store). */
  progressLessons?: Lesson[];
}

export default function LessonCard({
  lesson,
  showProgress = false,
  compact = false,
  showGroupInfo,
  teacherMode = false,
  showStaffRoomDetails,
  progressLessons,
}: LessonCardProps) {
  const colors = getLessonTypeColors(lesson.type);
  const courseGroupLine = `${getGroupCourse(lesson.groupId)} курс · ${getGroupName(lesson.groupId)}`;
  const showAuditoriumMeta = showStaffRoomDetails ?? teacherMode;
  const audDetails = showAuditoriumMeta ? getAuditoriumDetailLine(lesson.auditoriumId) : '';
  const extraInfoTrimmed = lesson.extraInfo?.trim() ?? '';
  const progressInfo =
    showProgress && progressLessons?.length ? getLessonProgressInfo(lesson, progressLessons) : null;
  const progressPct = getLessonProgressPercent(lesson, progressLessons);

  return (
    <div
      className={`rounded-lg p-3 min-w-0 ${colors.bg} ${colors.text} border border-white/50 ${
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
          <div className="pl-[22px] mt-1 space-y-0.5">
            <p className="text-[10px] font-semibold leading-tight opacity-95">Дополнительная информация</p>
            <p className="text-[10px] leading-tight opacity-90 whitespace-pre-wrap break-words">
              {extraInfoTrimmed}
            </p>
          </div>
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
          <p className="text-xs mb-1">Прогресс к плану</p>
          {progressInfo ? (
            <p className="text-[11px] opacity-90 mb-1 tabular-nums">
              {progressInfo.scheduledHours} / {progressInfo.plannedHours} акад. ч ({progressInfo.percent}%)
            </p>
          ) : progressLessons?.length ? (
            <p className="text-[11px] opacity-80 mb-1">Для этой строки нет записи в плане часов.</p>
          ) : null}
          <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-current rounded-full transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
