import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Lesson } from '../types';
import { initialLessons } from './mockData';

export interface ScheduleState {
  lessons: Lesson[];
}

const initialState: ScheduleState = {
  lessons: [...initialLessons],
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addLesson: (state, action: PayloadAction<Omit<Lesson, 'id'>>) => {
      const id = `lesson-${Date.now()}`;
      state.lessons.push({ ...action.payload, id } as Lesson);
    },
    updateLesson: (state, action: PayloadAction<Lesson>) => {
      const idx = state.lessons.findIndex((l) => l.id === action.payload.id);
      if (idx !== -1) state.lessons[idx] = action.payload;
    },
    moveLesson: (state, action: PayloadAction<{ id: string; dayOfWeek: number; timeSlot: number }>) => {
      const lesson = state.lessons.find((l) => l.id === action.payload.id);
      if (lesson) {
        lesson.dayOfWeek = action.payload.dayOfWeek;
        lesson.timeSlot = action.payload.timeSlot;
      }
    },
    removeLesson: (state, action: PayloadAction<string>) => {
      state.lessons = state.lessons.filter((l) => l.id !== action.payload);
    },
  },
});

export const { addLesson, updateLesson, moveLesson, removeLesson } = scheduleSlice.actions;
export default scheduleSlice.reducer;
