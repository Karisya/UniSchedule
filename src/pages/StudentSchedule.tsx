import { useMemo, useState, useCallback } from 'react';
import { useAppSelector } from '../store/hooks';
import ScheduleHeader from '../components/ScheduleHeader';
import SemanticSearchBar from '../components/SemanticSearchBar';
import LessonCard from '../components/LessonCard';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import { getWeekRange, formatDateRange, getGroupName, getWeekDayDates, sortLessonsForCellDisplay } from '../utils/scheduleUtils';
import { dateToWeekStartKey, deltaWeekStartsBetweenKeys, formatAcademicWeekLine } from '../utils/weekKeys';
import { SEMESTER_WEEK1_MONDAY_KEY } from '../config/semester';
import type { Lesson } from '../types';
import { useScheduleLessonFlash } from '../hooks/useScheduleLessonFlash';
import { Filter } from 'lucide-react';
import { ScheduleWeekColGroup, scheduleCellContentClass, scheduleEmptySlotClass } from '../components/ScheduleGridColGroups';

function getTodayWeekdayIndex(): number {
  const day = new Date().getDay();
  if (day === 0) return -1;
  if (day === 6) return 5;
  return day - 1;
}

export default function StudentSchedule() {
  const user = useAppSelector((s) => s.user.current);
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const [weekOffset, setWeekOffset] = useState(0);
  const [filterTypes, setFilterTypes] = useState<Set<string>>(new Set(['lecture', 'practice', 'laboratory']));
  const { flashLessonId, setFlashLessonId } = useScheduleLessonFlash();

  const groupId = user?.groupId ?? 'g3-1rf';
  const currentDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return d;
  }, [weekOffset]);

  const { start } = useMemo(() => getWeekRange(currentDate), [currentDate]);
  const viewWeekStartKey = useMemo(() => dateToWeekStartKey(start), [start]);
  const end = useMemo(() => {
    const e = new Date(start);
    e.setDate(e.getDate() + 5);
    return e;
  }, [start]);
  const dateRangeStr = formatDateRange(start, end);
  const weekDates = useMemo(() => getWeekDayDates(start), [start]);

  const filteredLessons = useMemo(() => {
    return lessons.filter(
      (l) =>
        l.groupId === groupId &&
        filterTypes.has(l.type) &&
        l.weekStartKey === viewWeekStartKey
    );
  }, [lessons, groupId, filterTypes, viewWeekStartKey]);

  const todayIdx = getTodayWeekdayIndex();
  const isCurrentWeek = weekOffset === 0;

  const toggleFilter = (type: string) => {
    setFilterTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  const getLessonsAt = (day: number, slot: number) =>
    sortLessonsForCellDisplay(
      filteredLessons.filter((l) => l.dayOfWeek === day && l.timeSlot === slot),
    );

  const handleSearchNavigate = useCallback(
    (lesson: Lesson) => {
      const d = deltaWeekStartsBetweenKeys(viewWeekStartKey, lesson.weekStartKey);
      setWeekOffset((o) => o + d);
      setFilterTypes((prev) => {
        const n = new Set(prev);
        n.add(lesson.type);
        return n;
      });
      setFlashLessonId(lesson.id);
    },
    [viewWeekStartKey, setFlashLessonId],
  );

  const academicWeekLine = useMemo(
    () => formatAcademicWeekLine(viewWeekStartKey, SEMESTER_WEEK1_MONDAY_KEY),
    [viewWeekStartKey],
  );

  return (
    <div className="min-h-screen">
      <ScheduleHeader
        title="Расписание"
        subtitle={dateRangeStr}
        userRole="Студент"
        userGroup={user?.groupId ? getGroupName(user.groupId) : undefined}
        showNav
        isCurrentWeek={isCurrentWeek}
        weekRangeLabel={dateRangeStr}
        academicWeekLine={academicWeekLine}
        onPrevWeek={() => setWeekOffset((o) => o - 1)}
        onNextWeek={() => setWeekOffset((o) => o + 1)}
        onCurrentWeek={() => setWeekOffset(0)}
        toolbar={<SemanticSearchBar role="student" onLessonNavigate={handleSearchNavigate} />}
      />

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Тип занятия:</span>
          </div>
          {[
            { type: 'lecture', label: 'Лекция', color: 'bg-blue-200' },
            { type: 'practice', label: 'Практика', color: 'bg-green-200' },
            { type: 'laboratory', label: 'Лабораторная', color: 'bg-purple-200' },
          ].map(({ type, label, color }) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterTypes.has(type)}
                onChange={() => toggleFilter(type)}
                className="sr-only peer"
              />
              <span className={`w-3 h-3 rounded-full ${color} peer-checked:ring-2 ring-offset-1 ring-gray-400`} />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="table-fixed w-full min-w-[1200px] border-collapse">
            <ScheduleWeekColGroup />
            <thead>
              <tr>
                <th className="p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50 min-w-0">
                  Время
                </th>
                {DAYS_OF_WEEK.slice(0, 6).map((day, i) => {
                  const d = weekDates[i];
                  const isTodayCol = isCurrentWeek && todayIdx === i;
                  return (
                    <th
                      key={day}
                      className={`p-2 text-center text-sm font-medium border-b border-gray-200 min-w-0 ${
                        isTodayCol ? 'bg-primary-100 text-primary-800 ring-2 ring-primary-300 ring-inset' : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div>{day}</div>
                      <div className="text-xs font-normal opacity-80 mt-0.5">
                        {d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TIME_SLOTS.map((slot, slotIdx) => (
                <tr key={slotIdx}>
                  <td className="p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top min-w-0">
                    {slot.start} – {slot.end}
                  </td>
                  {DAYS_OF_WEEK.slice(0, 6).map((_, dayIdx) => {
                    const cellLessons = getLessonsAt(dayIdx, slotIdx);
                    const isTodayCol = isCurrentWeek && todayIdx === dayIdx;
                    const flashHere =
                      flashLessonId != null && cellLessons.some((l) => l.id === flashLessonId);
                    return (
                      <td
                        key={dayIdx}
                        className={`p-2 border-b border-r border-gray-200 align-top min-w-0 ${
                          isTodayCol ? 'bg-primary-50/70' : ''
                        } ${flashHere ? 'ring-2 ring-amber-400 ring-offset-1 rounded-lg' : ''}`}
                      >
                        {cellLessons.length > 0 ? (
                          <div className={`${scheduleCellContentClass} flex flex-col gap-2`}>
                            {cellLessons.map((lesson) => (
                              <div key={lesson.id} data-schedule-lesson-slot={lesson.id}>
                                <LessonCard lesson={lesson} />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className={`${scheduleEmptySlotClass} bg-gray-50/50`} />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
