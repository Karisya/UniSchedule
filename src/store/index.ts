import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './scheduleSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
