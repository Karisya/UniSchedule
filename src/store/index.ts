import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './scheduleSlice';
import userReducer from './userSlice';
import { loadScheduleState, saveScheduleState } from './persistence';

const savedSchedule = loadScheduleState();

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    user: userReducer,
  },
  preloadedState: savedSchedule ? { schedule: savedSchedule } : undefined,
});

// Сохраняем расписание в localStorage при каждом изменении.
let lastSchedule = store.getState().schedule;
store.subscribe(() => {
  const schedule = store.getState().schedule;
  if (schedule !== lastSchedule) {
    lastSchedule = schedule;
    saveScheduleState(schedule);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
