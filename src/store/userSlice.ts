import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, UserRole } from '../types';

const initialState: { current: User | null } = {
  current: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.current = action.payload;
    },
    loginAs: (state, action: PayloadAction<{ role: UserRole; groupId?: string; teacherId?: string }>) => {
      const { role, groupId, teacherId } = action.payload;
      state.current = {
        id: role,
        name: role === 'student' ? 'Студент' : role === 'teacher' ? 'Преподаватель' : 'Администратор',
        role,
        groupId,
        teacherId,
      };
    },
    logout: (state) => {
      state.current = null;
    },
  },
});

export const { setUser, loginAs, logout } = userSlice.actions;
export default userSlice.reducer;
