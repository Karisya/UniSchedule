import { useMemo, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import ScheduleHeader from '../components/ScheduleHeader';
import LessonCard from '../components/LessonCard';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import {
  getWeekRange,
  formatDateRange,
  getWeekDayDates,
  getSubjectName,
  getAuditoriumName,
  getLessonTypeLabel,
  getGroupCourse,
  getGroupName,
  getAuditoriumDetailLine,
} from '../utils/scheduleUtils';
import { groups } from '../store/mockData';
import { dateToWeekStartKey } from '../utils/weekKeys';
import { Filter } from 'lucide-react';

function getTodayWeekdayIndex(): number {
  const day = new Date().getDay();
  if (day === 0 || day === 6) return -1;
  return day - 1;
}

export default function TeacherSchedule() {
  const user = useAppSelector((s) => s.user.current);
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const [weekOffset, setWeekOffset] = useState(0);
  const [filterCourse, setFilterCourse] = useState<string>('all');
  const [filterTypes, setFilterTypes] = useState<Set<string>>(new Set(['lecture', 'practice', 'laboratory']));

  const teacherId = user?.teacherId ?? '1';

  const currentDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return d;
  }, [weekOffset]);

  const { start } = useMemo(() => getWeekRange(currentDate), [currentDate]);
  const viewWeekStartKey = useMemo(() => dateToWeekStartKey(start), [start]);
  const end = useMemo(() => {
    const e = new Date(start);
    e.setDate(e.getDate() + 4);
    return e;
  }, [start]);
  const dateRangeStr = formatDateRange(start, end);
  const weekDates = useMemo(() => getWeekDayDates(start), [start]);

  const filteredLessons = useMemo(() => {
    return lessons.filter((l) => {
      if (l.teacherId !== teacherId) return false;
      if (!filterTypes.has(l.type)) return false;
      if (l.weekStartKey !== viewWeekStartKey) return false;
      const g = groups.find((gr) => gr.id === l.groupId);
      if (filterCourse !== 'all' && g?.course !== parseInt(filterCourse, 10)) return false;
      return true;
    });
  }, [lessons, teacherId, filterCourse, filterTypes, viewWeekStartKey]);

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

  const getLessonAt = (day: number, slot: number) =>
    filteredLessons.find((l) => l.dayOfWeek === day && l.timeSlot === slot);

  const headerCourseLabel =
    filterCourse === 'all' ? 'все курсы' : `${filterCourse} курс`;

  return (
    <div className="min-h-screen">
      <ScheduleHeader
        title="Расписание"
        subtitle={dateRangeStr}
        userRole="Преподаватель"
        userGroup={headerCourseLabel}
        showNav
        isCurrentWeek={isCurrentWeek}
        weekRangeLabel={dateRangeStr}
        onPrevWeek={() => setWeekOffset((o) => o - 1)}
        onNextWeek={() => setWeekOffset((o) => o + 1)}
        onCurrentWeek={() => setWeekOffset(0)}
      />

      <div className="p-6">
        <div className="flex items-center gap-6 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Курс:</span>
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="all">Все курсы</option>
              {[1, 2, 3, 4].map((c) => (
                <option key={c} value={String(c)}>
                  {c} курс
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
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
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="w-28 p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50">
                  Время
                </th>
                {DAYS_OF_WEEK.slice(0, 5).map((day, i) => {
                  const d = weekDates[i];
                  const isTodayCol = isCurrentWeek && todayIdx === i;
                  return (
                    <th
                      key={day}
                      className={`p-2 text-center text-sm font-medium border-b border-gray-200 ${
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
                  <td className="p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top">
                    {slot.start} – {slot.end}
                  </td>
                  {DAYS_OF_WEEK.slice(0, 5).map((_, dayIdx) => {
                    const lesson = getLessonAt(dayIdx, slotIdx);
                    const isTodayCol = isCurrentWeek && todayIdx === dayIdx;
                    return (
                      <td
                        key={dayIdx}
                        className={`p-2 border-b border-gray-200 align-top min-w-[140px] ${
                          isTodayCol ? 'bg-primary-50/70' : ''
                        }`}
                      >
                        {lesson ? (
                          <div
                            title={`${getGroupCourse(lesson.groupId)} курс, ${getGroupName(lesson.groupId)}\n${getSubjectName(lesson.subjectId)}\n${getAuditoriumName(lesson.auditoriumId)} — ${getAuditoriumDetailLine(lesson.auditoriumId)}\n${getLessonTypeLabel(lesson.type)}`}
                          >
                            <LessonCard lesson={lesson} showProgress teacherMode />
                          </div>
                        ) : (
                          <div className="h-20 bg-gray-50/50 rounded" />
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
