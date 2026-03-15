import { useMemo, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import ScheduleHeader from '../components/ScheduleHeader';
import LessonCard from '../components/LessonCard';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import {
  getWeekRange,
  formatDateRange,
  getSubjectName,
  getTeacherName,
  getAuditoriumName,
  getLessonTypeLabel,
} from '../utils/scheduleUtils';
import { Filter } from 'lucide-react';

export default function TeacherSchedule() {
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const [weekOffset, setWeekOffset] = useState(0);
  const [filterGroup, setFilterGroup] = useState<string>('1');
  const [filterTypes, setFilterTypes] = useState<Set<string>>(new Set(['lecture', 'practice', 'laboratory']));

  const teacherId = '1';
  const currentDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return d;
  }, [weekOffset]);

  const { start, end } = useMemo(() => getWeekRange(currentDate), [currentDate]);
  const dateRangeStr = formatDateRange(start, end);

  const filteredLessons = useMemo(() => {
    return lessons.filter(
      (l) => l.teacherId === teacherId && l.groupId === filterGroup && filterTypes.has(l.type)
    );
  }, [lessons, teacherId, filterGroup, filterTypes]);

  const todayDayOfWeek = useMemo(() => {
    const d = new Date();
    const day = d.getDay();
    return day === 0 ? 5 : day - 1;
  }, []);

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

  return (
    <div className="min-h-screen">
      <ScheduleHeader
        title="Расписание"
        subtitle={dateRangeStr}
        userRole="Преподаватель"
        userGroup="ИВТ-201"
        showNav
        onPrevWeek={() => setWeekOffset((o) => o - 1)}
        onNextWeek={() => setWeekOffset((o) => o + 1)}
        onToday={() => setWeekOffset(0)}
        onCurrentWeek={() => setWeekOffset(0)}
      />

      <div className="p-6">
        <div className="flex items-center gap-6 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Группа:</span>
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="1">ИВТ-201</option>
              <option value="2">ИВТ-202</option>
              <option value="3">ПИ-201</option>
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
                {DAYS_OF_WEEK.slice(0, 5).map((day, i) => (
                  <th
                    key={day}
                    className={`p-2 text-center text-sm font-medium border-b border-gray-200 ${
                      i === todayDayOfWeek && weekOffset === 0 ? 'bg-primary-50 text-primary-700' : 'bg-gray-50 text-gray-600'
                    }`}
                  >
                    {day}
                  </th>
                ))}
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
                    const isToday = dayIdx === todayDayOfWeek && weekOffset === 0;
                    return (
                      <td
                        key={dayIdx}
                        className={`p-2 border-b border-gray-200 align-top min-w-[140px] ${
                          isToday ? 'bg-primary-50/50' : ''
                        }`}
                      >
                        {lesson ? (
                          <div
                            title={`${getSubjectName(lesson.subjectId)}\nПреподаватель: ${getTeacherName(lesson.teacherId)}\nАудитория: ${getAuditoriumName(lesson.auditoriumId)}\nТип: ${getLessonTypeLabel(lesson.type)}\nПрогресс: ${lesson.progress ?? 0}%`}
                            className="cursor-help"
                          >
                            <LessonCard lesson={lesson} showProgress />
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
