import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UseState {
  user: any;
  isAuth: boolean;
}

const initialState: UseState = {
  user: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuth = true;
    },

    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
