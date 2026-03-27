import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addLesson, moveLesson, updateLesson, removeLesson } from '../store/scheduleSlice';
import ScheduleHeader from '../components/ScheduleHeader';
import LessonCard from '../components/LessonCard';
import LessonModal, { type LessonFormData } from '../components/LessonModal';
import DeleteModal from '../components/DeleteModal';
import ConflictModal from '../components/ConflictModal';
import DroppableCell from '../components/DroppableCell';
import type { Lesson } from '../types';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import {
  hasConflict,
  getSubjectName,
  getGroupName,
  getGroupCourse,
  getWeekRange,
  formatDateRange,
  getWeekDayDates,
  findScheduleConflicts,
  calendarDayToWeekdayIndex,
  getLessonTypeColors,
} from '../utils/scheduleUtils';
import { exportLessonsToExcel } from '../utils/exportExcel';
import { Save, Copy } from 'lucide-react';
import { groups, teachers, auditoriums } from '../store/mockData';
import { dateToWeekStartKey, addWeeksToWeekStartKey, weekStartKeyToMondayDate } from '../utils/weekKeys';

type ViewMode = 'day' | 'week' | 'month';

function getTodayWeekdayIndex(): number {
  const day = new Date().getDay();
  if (day === 0 || day === 6) return -1;
  return day - 1;
}

function buildMonthGrid(year: number, month: number): Date[][] {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const start = new Date(first);
  const dow = first.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  start.setDate(first.getDate() + diff);
  const weeks: Date[][] = [];
  let cur = new Date(start);
  while (weeks.length < 6) {
    const row: Date[] = [];
    for (let i = 0; i < 7; i++) {
      row.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(row);
    if (cur > last && cur.getMonth() !== month) break;
  }
  return weeks;
}

export default function AdminSchedule() {
  const dispatch = useAppDispatch();
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState<Lesson | null>(null);
  const [conflictModalOpen, setConflictModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [selectedDay, setSelectedDay] = useState(0);
  const [filterCourse, setFilterCourse] = useState<string>('');
  const [filterGroup, setFilterGroup] = useState<string>('');
  const [filterTeacher, setFilterTeacher] = useState<string>('all');
  const [filterAuditorium, setFilterAuditorium] = useState<string>('all');

  const filtersReady = filterCourse !== '' && filterGroup !== '';
  const [prefilledSlot, setPrefilledSlot] = useState<{
    dayOfWeek: number;
    timeSlot: number;
    weekStartKey?: string;
  } | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const [monthCursor, setMonthCursor] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const weekRange = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return getWeekRange(d);
  }, [weekOffset]);
  const { start: weekStart, end: weekEnd } = weekRange;
  const viewWeekStartKey = useMemo(() => dateToWeekStartKey(weekStart), [weekStart]);
  const dateRangeStr = formatDateRange(weekStart, weekEnd);
  const weekDates = useMemo(() => getWeekDayDates(weekStart), [weekStart]);
  const todayIdx = getTodayWeekdayIndex();
  const isCurrentWeekNav = weekOffset === 0;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const groupsForCourse = useMemo(() => {
    if (filterCourse === '') return [];
    const c = parseInt(filterCourse, 10);
    return groups.filter((g) => g.course === c);
  }, [filterCourse]);

  const lessonsForCascade = useMemo(() => {
    if (!filtersReady) return [];
    const c = parseInt(filterCourse, 10);
    return lessons.filter((l) => {
      const g = groups.find((gr) => gr.id === l.groupId);
      if (g?.course !== c || l.groupId !== filterGroup) return false;
      return true;
    });
  }, [lessons, filterCourse, filterGroup, filtersReady]);

  const teacherOptions = useMemo(() => {
    if (!filtersReady) return [];
    const ids = new Set(lessonsForCascade.map((l) => l.teacherId));
    if (ids.size === 0) return teachers;
    return teachers.filter((t) => ids.has(t.id));
  }, [lessonsForCascade, filtersReady]);

  const auditoriumOptions = useMemo(() => {
    if (!filtersReady) return [];
    const ids = new Set(lessonsForCascade.map((l) => l.auditoriumId));
    if (ids.size === 0) return auditoriums;
    return auditoriums.filter((a) => ids.has(a.id));
  }, [lessonsForCascade, filtersReady]);

  useEffect(() => {
    if (filterGroup !== '') {
      const g = groups.find((gr) => gr.id === filterGroup);
      if (filterCourse !== '' && g && g.course !== parseInt(filterCourse, 10)) {
        setFilterGroup('');
      }
    }
  }, [filterCourse, filterGroup]);

  useEffect(() => {
    if (filterTeacher !== 'all' && !teacherOptions.some((t) => t.id === filterTeacher)) {
      setFilterTeacher('all');
    }
  }, [teacherOptions, filterTeacher]);

  useEffect(() => {
    if (filterAuditorium !== 'all' && !auditoriumOptions.some((a) => a.id === filterAuditorium)) {
      setFilterAuditorium('all');
    }
  }, [auditoriumOptions, filterAuditorium]);

  const filteredLessons = useMemo(() => {
    if (!filtersReady) return [];
    const c = parseInt(filterCourse, 10);
    let out = lessons.filter((l) => {
      const g = groups.find((gr) => gr.id === l.groupId);
      if (g?.course !== c || l.groupId !== filterGroup) return false;
      if (filterTeacher !== 'all' && l.teacherId !== filterTeacher) return false;
      if (filterAuditorium !== 'all' && l.auditoriumId !== filterAuditorium) return false;
      return true;
    });
    if (viewMode !== 'month') {
      out = out.filter((l) => l.weekStartKey === viewWeekStartKey);
    }
    return out;
  }, [
    lessons,
    filterCourse,
    filterGroup,
    filterTeacher,
    filterAuditorium,
    filtersReady,
    viewMode,
    viewWeekStartKey,
  ]);

  /** Занятия выбранной группы на просматриваемой неделе — источник для копирования. */
  const sourceLessonsForCopy = useMemo(() => {
    if (!filtersReady) return [];
    const c = parseInt(filterCourse, 10);
    return lessons.filter((l) => {
      if (l.weekStartKey !== viewWeekStartKey) return false;
      const g = groups.find((gr) => gr.id === l.groupId);
      if (g?.course !== c || l.groupId !== filterGroup) return false;
      return true;
    });
  }, [lessons, filtersReady, filterCourse, filterGroup, viewWeekStartKey]);

  const getLessonAt = useCallback(
    (day: number, slot: number) =>
      filteredLessons.find((lt) => lt.dayOfWeek === day && lt.timeSlot === slot) ?? null,
    [filteredLessons]
  );

  const getConflictAt = useCallback(
    (day: number, slot: number) => {
      const inSlot = lessons.filter(
        (l) =>
          l.weekStartKey === viewWeekStartKey &&
          l.dayOfWeek === day &&
          l.timeSlot === slot
      );
      return inSlot.length > 1;
    },
    [lessons, viewWeekStartKey]
  );

  const totalSlots = 5 * 6;
  const lessonsInViewWeek = useMemo(
    () => lessons.filter((l) => l.weekStartKey === viewWeekStartKey),
    [lessons, viewWeekStartKey]
  );
  const filledCount = useMemo(() => {
    const unique = new Set(lessonsInViewWeek.map((l) => `${l.dayOfWeek}-${l.timeSlot}`));
    return unique.size;
  }, [lessonsInViewWeek]);
  const fillPercent = Math.round((filledCount / totalSlots) * 100);

  const conflictEntries = useMemo(() => findScheduleConflicts(lessons), [lessons]);
  const conflictsCount = conflictEntries.length;

  const handleDragStart = (e: DragStartEvent) => setActiveId(String(e.active.id));
  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = e;
    if (!over) return;
    const overId = String(over.id);
    if (!overId.startsWith('cell-')) return;
    const [, dayStr, slotStr] = overId.split('-');
    const dayOfWeek = parseInt(dayStr, 10);
    const timeSlot = parseInt(slotStr, 10);
    dispatch(moveLesson({ id: String(active.id), dayOfWeek, timeSlot }));
  };

  const openAddModal = (prefill?: { dayOfWeek: number; timeSlot: number }) => {
    if (!filtersReady) return;
    setEditingLessonId(null);
    setPrefilledSlot(prefill ?? null);
    setModalOpen(true);
  };

  const openEditModal = (lesson: Lesson) => {
    setEditingLessonId(lesson.id);
    setPrefilledSlot(null);
    setModalOpen(true);
  };

  const openDeleteModal = (lesson: Lesson) => {
    setLessonToDelete(lesson);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (lessonToDelete) {
      dispatch(removeLesson(lessonToDelete.id));
      setLessonToDelete(null);
      setDeleteModalOpen(false);
    }
  };

  const handleSaveExcel = () => {
    if (!filtersReady) return;
    const stamp = new Date().toISOString().slice(0, 10);
    exportLessonsToExcel(filteredLessons, `UniSchedule_${stamp}.xlsx`);
  };

  const handleCopyWeekToNext = useCallback(() => {
    if (!filtersReady || sourceLessonsForCopy.length === 0) return;
    const nextKey = addWeeksToWeekStartKey(viewWeekStartKey, 1);
    const nextStart = weekStartKeyToMondayDate(nextKey);
    const nextEnd = new Date(nextStart);
    nextEnd.setDate(nextEnd.getDate() + 4);
    const nextRangeLabel = formatDateRange(nextStart, nextEnd);
    if (
      !window.confirm(
        `Скопировать ${sourceLessonsForCopy.length} занятий выбранной группы на следующую неделю (${nextRangeLabel})? Уже занятые слоты будут пропущены.`,
      )
    ) {
      return;
    }
    let copied = 0;
    let skipped = 0;
    for (const l of sourceLessonsForCopy) {
      const occupied = lessons.some(
        (x) =>
          x.weekStartKey === nextKey &&
          x.groupId === l.groupId &&
          x.dayOfWeek === l.dayOfWeek &&
          x.timeSlot === l.timeSlot
      );
      if (occupied) {
        skipped += 1;
        continue;
      }
      const { id: _id, ...rest } = l;
      dispatch(addLesson({ ...rest, weekStartKey: nextKey }));
      copied += 1;
    }
    if (copied === 0) {
      window.alert('Не скопировано ни одного занятия: все слоты на следующей неделе уже заняты.');
    } else {
      window.alert(
        skipped > 0
          ? `Готово: скопировано ${copied}, пропущено (слот занят) — ${skipped}.`
          : `Готово: скопировано ${copied} занятий.`,
      );
    }
  }, [filtersReady, sourceLessonsForCopy, viewWeekStartKey, lessons, dispatch]);

  const handleModalSubmit = (data: LessonFormData) => {
    const extraInfo = data.extraInfo?.trim() || undefined;
    const lessonPayload = { ...data, extraInfo };
    const weekKeyForNew = prefilledSlot?.weekStartKey ?? viewWeekStartKey;
    if (editingLessonId) {
      const lesson = lessons.find((l) => l.id === editingLessonId);
      if (lesson) dispatch(updateLesson({ ...lesson, ...lessonPayload }));
    } else {
      const payload = prefilledSlot
        ? {
            ...lessonPayload,
            dayOfWeek: prefilledSlot.dayOfWeek,
            timeSlot: prefilledSlot.timeSlot,
            weekStartKey: weekKeyForNew,
          }
        : { ...lessonPayload, weekStartKey: viewWeekStartKey };
      dispatch(addLesson(payload));
    }
    setModalOpen(false);
    setPrefilledSlot(null);
  };

  const editingLesson = editingLessonId ? lessons.find((l) => l.id === editingLessonId) : null;

  const conflictsForModal = useMemo(() => {
    if (!editingLesson) return { room: false, teacher: false };
    const wk = editingLesson.weekStartKey;
    const { roomConflict, teacherConflict } = hasConflict(
      lessons,
      editingLesson.dayOfWeek,
      editingLesson.timeSlot,
      editingLesson.id,
      editingLesson.auditoriumId,
      editingLesson.teacherId,
      wk
    );
    return { room: !!roomConflict, teacher: !!teacherConflict };
  }, [editingLesson, lessons]);

  const renderWeekTable = () => (
    <table className="w-full min-w-[800px] border-collapse">
      <thead>
        <tr>
          <th className="w-28 p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50">
            Время
          </th>
          {DAYS_OF_WEEK.slice(0, 5).map((day, i) => {
            const d = weekDates[i];
            const isTodayCol = isCurrentWeekNav && todayIdx === i;
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
              {slot.start}–{slot.end}
            </td>
            {DAYS_OF_WEEK.slice(0, 5).map((_, dayIdx) => (
              <DroppableCell
                key={dayIdx}
                dayOfWeek={dayIdx}
                timeSlot={slotIdx}
                lesson={getLessonAt(dayIdx, slotIdx)}
                isConflict={getConflictAt(dayIdx, slotIdx)}
                onEdit={openEditModal}
                onDelete={openDeleteModal}
                onEmptyClick={(d, s) => openAddModal({ dayOfWeek: d, timeSlot: s })}
                scheduleReady={filtersReady}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderDayTable = () => (
    <table className="w-full min-w-[400px] border-collapse">
      <thead>
        <tr>
          <th className="w-28 p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50">
            Время
          </th>
          <th
            className={`p-2 text-center text-sm font-medium border-b border-gray-200 ${
              isCurrentWeekNav && todayIdx === selectedDay ? 'bg-primary-100 text-primary-800' : 'bg-gray-50 text-gray-600'
            }`}
          >
            {DAYS_OF_WEEK[selectedDay]}
          </th>
        </tr>
      </thead>
      <tbody>
        {TIME_SLOTS.map((slot, slotIdx) => (
          <tr key={slotIdx}>
            <td className="p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top">
              {slot.start}–{slot.end}
            </td>
            <DroppableCell
              dayOfWeek={selectedDay}
              timeSlot={slotIdx}
              lesson={getLessonAt(selectedDay, slotIdx)}
              isConflict={getConflictAt(selectedDay, slotIdx)}
              onEdit={openEditModal}
              onDelete={openDeleteModal}
              onEmptyClick={(_, s) => openAddModal({ dayOfWeek: selectedDay, timeSlot: s })}
              scheduleReady={filtersReady}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );

  const monthGrid = useMemo(
    () => buildMonthGrid(monthCursor.getFullYear(), monthCursor.getMonth()),
    [monthCursor]
  );
  const calLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const renderMonthCalendar = () => (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between mb-4 px-2">
        <button
          type="button"
          onClick={() =>
            setMonthCursor((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))
          }
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50"
        >
          ←
        </button>
        <h3 className="text-lg font-semibold text-gray-900">
          {monthCursor.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          type="button"
          onClick={() =>
            setMonthCursor((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))
          }
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50"
        >
          →
        </button>
      </div>
      <table className="w-full border-collapse min-w-[900px]">
        <thead>
          <tr>
            {calLabels.map((l) => (
              <th key={l} className="p-2 text-center text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200">
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthGrid.map((week, wi) => (
            <tr key={wi}>
              {week.map((cellDate, di) => {
                const inMonth = cellDate.getMonth() === monthCursor.getMonth();
                const wd = calendarDayToWeekdayIndex(cellDate);
                const isWeekend = wd === null;
                const cellWeekKey = dateToWeekStartKey(cellDate);
                const cellLessons =
                  wd !== null && inMonth
                    ? filteredLessons.filter(
                        (l) => l.dayOfWeek === wd && l.weekStartKey === cellWeekKey
                      )
                    : [];
                const isTodayCell =
                  new Date().toDateString() === cellDate.toDateString();
                return (
                  <td
                    key={di}
                    className={`align-top border border-gray-200 p-1 min-h-[120px] w-[14%] ${
                      !inMonth ? 'bg-gray-50 text-gray-400' : isWeekend ? 'bg-gray-100' : 'bg-white'
                    } ${isTodayCell ? 'ring-2 ring-primary-400 ring-inset' : ''}`}
                  >
                    <div className="text-xs font-semibold mb-1">{cellDate.getDate()}</div>
                    {inMonth && !isWeekend && (
                      <div className="space-y-1 max-h-[200px] overflow-y-auto">
                        {cellLessons.slice(0, 6).map((l) => {
                          const name = getSubjectName(l.subjectId);
                          const short = name.length > 20 ? `${name.slice(0, 20)}…` : name;
                          const colors = getLessonTypeColors(l.type);
                          return (
                            <button
                              type="button"
                              key={l.id}
                              onClick={() => openEditModal(l)}
                              className={`block w-full text-left text-[10px] leading-tight p-1 rounded truncate border border-white/40 hover:brightness-95 ${colors.bg} ${colors.text}`}
                              title={name}
                            >
                              {TIME_SLOTS[l.timeSlot]?.start} {short}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2 px-2">
        В ячейке — занятия с этой календарной датой (неделя и день). Клик по занятию открывает редактирование.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen">
      <ScheduleHeader
        title="Управление расписанием"
        subtitle={dateRangeStr}
        userRole="Администратор"
        showNav
        isCurrentWeek={isCurrentWeekNav}
        weekRangeLabel={dateRangeStr}
        onPrevWeek={() => setWeekOffset((o) => o - 1)}
        onNextWeek={() => setWeekOffset((o) => o + 1)}
        onCurrentWeek={() => {
          setWeekOffset(0);
          const d = new Date();
          setMonthCursor(new Date(d.getFullYear(), d.getMonth(), 1));
        }}
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => openAddModal()}
              disabled={!filtersReady}
              title={!filtersReady ? 'Сначала выберите курс и группу' : undefined}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              + Добавить занятие
            </button>
            <button
              type="button"
              onClick={handleSaveExcel}
              disabled={!filtersReady}
              title={!filtersReady ? 'Сначала выберите курс и группу' : undefined}
              className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              Сохранить
            </button>
            <button
              type="button"
              onClick={handleCopyWeekToNext}
              disabled={!filtersReady || sourceLessonsForCopy.length === 0}
              title={
                !filtersReady
                  ? 'Сначала выберите курс и группу'
                  : sourceLessonsForCopy.length === 0
                    ? 'На этой неделе нет занятий для выбранной группы'
                    : 'Повторить расписание группы на следующую календарную неделю'
              }
              className="px-4 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Copy className="w-4 h-4" />
              Копировать на след. неделю
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{fillPercent}% заполнено</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${fillPercent}%` }} />
              </div>
            </div>
            <button
              type="button"
              onClick={() => conflictsCount > 0 && setConflictModalOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                conflictsCount > 0
                  ? 'bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer'
                  : 'bg-green-100 text-green-700 cursor-default'
              }`}
            >
              {conflictsCount > 0 ? `Конфликты: ${conflictsCount}` : '✓ Нет конфликтов'}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            {(['day', 'week', 'month'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setViewMode(m)}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === m ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {m === 'day' ? 'День' : m === 'week' ? 'Неделя' : 'Месяц'}
              </button>
            ))}
          </div>

          {viewMode !== 'month' && (
            <span className="text-sm text-gray-600">Неделя: {dateRangeStr}</span>
          )}

          {viewMode === 'day' && (
            <div className="flex gap-2 flex-wrap">
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт'].map((d, i) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setSelectedDay(i)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    selectedDay === i ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 ml-auto">
            <select
              value={filterCourse}
              onChange={(e) => {
                setFilterCourse(e.target.value);
                setFilterGroup('');
                setFilterTeacher('all');
                setFilterAuditorium('all');
              }}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="">Выберите курс</option>
              {[1, 2, 3, 4].map((c) => (
                <option key={c} value={c}>
                  {c} курс
                </option>
              ))}
            </select>
            <select
              value={filterGroup}
              disabled={filterCourse === ''}
              onChange={(e) => {
                setFilterGroup(e.target.value);
                setFilterTeacher('all');
                setFilterAuditorium('all');
              }}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-500"
            >
              <option value="">
                {filterCourse === '' ? 'Сначала курс' : 'Выберите группу'}
              </option>
              {groupsForCourse.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
            <select
              value={filterTeacher}
              disabled={!filtersReady}
              onChange={(e) => setFilterTeacher(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-500"
            >
              <option value="all">Все преподаватели</option>
              {teacherOptions.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <select
              value={filterAuditorium}
              disabled={!filtersReady}
              onChange={(e) => setFilterAuditorium(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-500"
            >
              <option value="all">Все аудитории</option>
              {auditoriumOptions.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="w-3 h-3 rounded-full bg-lecture-bg" /> Лекция
          <span className="w-3 h-3 rounded-full bg-practice-bg" /> Практика
          <span className="w-3 h-3 rounded-full bg-laboratory-bg" /> Лабораторная
        </div>

        {!filtersReady && (
          <div className="mb-4 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-sm">
            Выберите <strong>курс</strong> и <strong>группу</strong> — таблица расписания появится только после выбора обоих фильтров.
          </div>
        )}

        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto p-2">
            {viewMode === 'day' && renderDayTable()}
            {viewMode === 'week' && renderWeekTable()}
            {viewMode === 'month' && renderMonthCalendar()}
          </div>

          <DragOverlay>
            {activeId ? (() => {
              const lesson = lessons.find((l) => l.id === activeId);
              return lesson ? (
                <div className="w-36">
                  <LessonCard
                    lesson={lesson}
                    compact
                    showGroupInfo={`${getGroupName(lesson.groupId)} • ${getGroupCourse(lesson.groupId)} курс`}
                    showStaffRoomDetails
                  />
                </div>
              ) : null;
            })() : null}
          </DragOverlay>
        </DndContext>

        <LessonModal
          isOpen={modalOpen}
          onClose={() => { setModalOpen(false); setPrefilledSlot(null); }}
          onSubmit={handleModalSubmit}
          initialData={
            editingLesson
              ? {
                  subjectId: editingLesson.subjectId,
                  teacherId: editingLesson.teacherId,
                  auditoriumId: editingLesson.auditoriumId,
                  groupId: editingLesson.groupId,
                  type: editingLesson.type,
                  dayOfWeek: editingLesson.dayOfWeek,
                  timeSlot: editingLesson.timeSlot,
                  extraInfo: editingLesson.extraInfo,
                }
              : prefilledSlot
              ? {
                  dayOfWeek: prefilledSlot.dayOfWeek,
                  timeSlot: prefilledSlot.timeSlot,
                  groupId: filterGroup,
                }
              : filtersReady
              ? { groupId: filterGroup }
              : undefined
          }
          conflicts={editingLesson ? conflictsForModal : { room: false, teacher: false }}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          subjectName={lessonToDelete ? getSubjectName(lessonToDelete.subjectId) : ''}
          onConfirm={confirmDelete}
          onCancel={() => { setDeleteModalOpen(false); setLessonToDelete(null); }}
        />

        <ConflictModal
          isOpen={conflictModalOpen}
          conflicts={conflictEntries}
          onClose={() => setConflictModalOpen(false)}
          onRemoveLesson={(id) => dispatch(removeLesson(id))}
        />
      </div>
    </div>
  );
}
