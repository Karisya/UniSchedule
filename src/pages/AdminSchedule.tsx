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
import { addLesson, moveLesson, updateLesson } from '../store/scheduleSlice';
import ScheduleHeader from '../components/ScheduleHeader';
import LessonCard from '../components/LessonCard';
import LessonModal, { type LessonFormData } from '../components/LessonModal';
import DroppableCell from '../components/DroppableCell';
import type { Lesson } from '../types';
import { TIME_SLOTS, DAYS_OF_WEEK } from '../types';
import { hasConflict } from '../utils/scheduleUtils';


export default function AdminSchedule() {
  const dispatch = useAppDispatch();
  const lessons = useAppSelector((s) => s.schedule.lessons);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const getLessonAt = useCallback(
    (day: number, slot: number) =>
      lessons.find((l) => l.dayOfWeek === day && l.timeSlot === slot) ?? null,
    [lessons]
  );

  const getConflictAt = useCallback(
    (day: number, slot: number) => {
      const inSlot = lessons.filter((l) => l.dayOfWeek === day && l.timeSlot === slot);
      return inSlot.length > 1;
    },
    [lessons]
  );

  const totalSlots = 5 * 6; // 5 days * 6 slots
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

  const openAddModal = () => {
    setEditingLessonId(null);
    setModalOpen(true);
  };

  const openEditModal = (lesson: Lesson) => {
    setEditingLessonId(lesson.id);
    setModalOpen(true);
  };

  const handleModalSubmit = (data: LessonFormData) => {
    if (editingLessonId) {
      const lesson = lessons.find((l) => l.id === editingLessonId);
      if (lesson) {
        dispatch(updateLesson({ ...lesson, ...data }));
      }
    } else {
      dispatch(addLesson(data));
    }
    setModalOpen(false);
  };

  const editingLesson = editingLessonId
    ? lessons.find((l) => l.id === editingLessonId)
    : null;

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
              onClick={openAddModal}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium flex items-center gap-2"
            >
              + Добавить занятие
            </button>
            <button
              className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50"
            >
              Сохранить
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{fillPercent}% заполнено</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              {conflictsCount > 0 ? (
                <span className="text-red-600 text-sm flex items-center gap-1">
                  Конфликты: {conflictsCount}
                </span>
              ) : (
                <span className="text-green-600 text-sm flex items-center gap-1">
                  ✓ Нет конфликтов
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="w-3 h-3 rounded-full bg-lecture-bg" /> Лекция
          <span className="w-3 h-3 rounded-full bg-practice-bg" /> Практика
          <span className="w-3 h-3 rounded-full bg-laboratory-bg" /> Лабораторная
        </div>

        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="w-28 p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50">
                    Время
                  </th>
                  {DAYS_OF_WEEK.slice(0, 5).map((day) => (
                    <th
                      key={day}
                      className="p-2 text-center text-sm font-medium border-b border-gray-200 bg-gray-50 text-gray-600"
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
                      {slot.start}–{slot.end}
                    </td>
                    {DAYS_OF_WEEK.slice(0, 5).map((_, dayIdx) => {
                      const lesson = getLessonAt(dayIdx, slotIdx);
                      const conflict = getConflictAt(dayIdx, slotIdx);
                      return (
                        <DroppableCell
                          key={dayIdx}
                          dayOfWeek={dayIdx}
                          timeSlot={slotIdx}
                          lesson={lesson}
                          isConflict={conflict}
                          onEdit={openEditModal}
                        />
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DragOverlay>
            {activeId ? (
              (() => {
                const lesson = lessons.find((l) => l.id === activeId);
                return lesson ? (
                  <div className="w-32">
                    <LessonCard lesson={lesson} compact />
                  </div>
                ) : null;
              })()
            ) : null}
          </DragOverlay>
        </DndContext>

        <LessonModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
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
              : undefined
          }
          conflicts={
            editingLesson
              ? conflictsForModal
              : { room: false, teacher: false }
          }
        />
      </div>
    </div>
  );
}
