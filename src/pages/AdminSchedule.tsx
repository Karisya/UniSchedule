import { useCallback, useMemo, useState } from 'react';
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
import DroppableCell from '../components/DroppableCell';
import type { Lesson } from '../types';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import { hasConflict, getSubjectName, getGroupName, getGroupCourse, getWeekRange, formatDateRange } from '../utils/scheduleUtils';
import { Save } from 'lucide-react';
import { groups, teachers, auditoriums } from '../store/mockData';

type ViewMode = 'day' | 'week' | 'month';

export default function AdminSchedule() {
  const dispatch = useAppDispatch();
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState<Lesson | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [selectedDay, setSelectedDay] = useState(0); // 0-4 Пн-Пт
  const [filterCourse, setFilterCourse] = useState<string>('all');
  const [filterGroup, setFilterGroup] = useState<string>('all');
  const [filterTeacher, setFilterTeacher] = useState<string>('all');
  const [filterAuditorium, setFilterAuditorium] = useState<string>('all');
  const [prefilledSlot, setPrefilledSlot] = useState<{ dayOfWeek: number; timeSlot: number } | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);

  const weekRange = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + weekOffset * 7);
    return getWeekRange(d);
  }, [weekOffset]);
  const dateRangeStr = formatDateRange(weekRange.start, weekRange.end);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const filteredLessons = useMemo(() => {
    return lessons.filter((l) => {
      const g = groups.find((gr) => gr.id === l.groupId);
      if (filterCourse !== 'all' && g?.course !== parseInt(filterCourse, 10)) return false;
      if (filterGroup !== 'all' && l.groupId !== filterGroup) return false;
      if (filterTeacher !== 'all' && l.teacherId !== filterTeacher) return false;
      if (filterAuditorium !== 'all' && l.auditoriumId !== filterAuditorium) return false;
      return true;
    });
  }, [lessons, filterCourse, filterGroup, filterTeacher, filterAuditorium]);

  const getLessonAt = useCallback(
    (day: number, slot: number) =>
      filteredLessons.find((l) => l.dayOfWeek === day && l.timeSlot === slot) ?? null,
    [filteredLessons]
  );

  const getConflictAt = useCallback(
    (day: number, slot: number) => {
      const inSlot = filteredLessons.filter((l) => l.dayOfWeek === day && l.timeSlot === slot);
      return inSlot.length > 1;
    },
    [filteredLessons]
  );

  const totalSlots = 5 * 6;
  const filledCount = useMemo(() => {
    const unique = new Set(lessons.map((l) => `${l.dayOfWeek}-${l.timeSlot}`));
    return unique.size;
  }, [lessons]);
  const fillPercent = Math.round((filledCount / totalSlots) * 100);

  const conflictsCount = useMemo(() => {
    let count = 0;
    const bySlot = new Map<string, Lesson[]>();
    for (const l of lessons) {
      const key = `${l.dayOfWeek}-${l.timeSlot}`;
      if (!bySlot.has(key)) bySlot.set(key, []);
      bySlot.get(key)!.push(l);
    }
    for (const arr of bySlot.values()) {
      if (arr.length > 1) count += arr.length;
    }
    return count;
  }, [lessons]);

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

  const handleModalSubmit = (data: LessonFormData) => {
    if (editingLessonId) {
      const lesson = lessons.find((l) => l.id === editingLessonId);
      if (lesson) dispatch(updateLesson({ ...lesson, ...data }));
    } else {
      const payload = prefilledSlot
        ? { ...data, dayOfWeek: prefilledSlot.dayOfWeek, timeSlot: prefilledSlot.timeSlot }
        : data;
      dispatch(addLesson(payload));
    }
    setModalOpen(false);
    setPrefilledSlot(null);
  };

  const editingLesson = editingLessonId ? lessons.find((l) => l.id === editingLessonId) : null;

  const conflictsForModal = useMemo(() => {
    if (!editingLesson) return { room: false, teacher: false };
    const { roomConflict, teacherConflict } = hasConflict(
      lessons,
      editingLesson.dayOfWeek,
      editingLesson.timeSlot,
      editingLesson.id,
      editingLesson.auditoriumId,
      editingLesson.teacherId
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
          {DAYS_OF_WEEK.slice(0, 5).map((day) => (
            <th key={day} className="p-2 text-center text-sm font-medium border-b border-gray-200 bg-gray-50 text-gray-600">
              {day}
            </th>
          ))}
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
          <th className="p-2 text-center text-sm font-medium border-b border-gray-200 bg-gray-50 text-gray-600">
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
            />
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderMonthView = () => (
    <div className="p-4">
      <p className="text-gray-500 text-sm mb-4">Режим месяца: отображение по неделям</p>
      {renderWeekTable()}
    </div>
  );

  return (
    <div className="min-h-screen">
      <ScheduleHeader
        title="Управление расписанием"
        subtitle="Панель администратора — перетаскивайте занятия для изменения расписания"
        userRole="Администратор"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => openAddModal()}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium flex items-center gap-2"
            >
              + Добавить занятие
            </button>
            <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Сохранить
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{fillPercent}% заполнено</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${fillPercent}%` }} />
              </div>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${conflictsCount > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {conflictsCount > 0 ? `Конфликты: ${conflictsCount}` : '✓ Нет конфликтов'}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            {(['day', 'week', 'month'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === m ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {m === 'day' ? 'День' : m === 'week' ? 'Неделя' : 'Месяц'}
              </button>
            ))}
          </div>
          <span className="text-sm text-gray-600 flex items-center gap-1">
            📅 {dateRangeStr}
          </span>
          <div className="flex gap-2">
            <button onClick={() => setWeekOffset((o) => o - 1)} className="px-2 py-1 rounded border border-gray-300 hover:bg-gray-50">←</button>
            <button onClick={() => setWeekOffset(0)} className="px-2 py-1 rounded border border-gray-300 hover:bg-gray-50">Сегодня</button>
            <button onClick={() => setWeekOffset((o) => o + 1)} className="px-2 py-1 rounded border border-gray-300 hover:bg-gray-50">→</button>
          </div>
          {viewMode === 'day' && (
            <div className="flex gap-2">
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт'].map((d, i) => (
                <button
                  key={d}
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

          <div className="flex items-center gap-2 ml-auto">
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="all">Все курсы</option>
              {[1, 2, 3, 4].map((c) => (
                <option key={c} value={c}>{c} курс</option>
              ))}
            </select>
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="all">Все группы</option>
              {groups.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
            <select
              value={filterTeacher}
              onChange={(e) => setFilterTeacher(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="all">Все преподаватели</option>
              {teachers.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
            <select
              value={filterAuditorium}
              onChange={(e) => setFilterAuditorium(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="all">Все аудитории</option>
              {auditoriums.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="w-3 h-3 rounded-full bg-lecture-bg" /> Лекция
          <span className="w-3 h-3 rounded-full bg-practice-bg" /> Практика
          <span className="w-3 h-3 rounded-full bg-laboratory-bg" /> Лабораторная
        </div>

        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
            {viewMode === 'day' && renderDayTable()}
            {viewMode === 'week' && renderWeekTable()}
            {viewMode === 'month' && renderMonthView()}
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
                }
              : prefilledSlot
              ? { dayOfWeek: prefilledSlot.dayOfWeek, timeSlot: prefilledSlot.timeSlot }
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
      </div>
    </div>
  );
}
