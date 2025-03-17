/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CounterState {
  value: boolean;
  isLogin: boolean;
  snackBar: boolean;
}
const initialState: CounterState = {
  value: false,
  isLogin: true,
  snackBar: false
};

export const ToggleSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    darkMode: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    loggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    snackbar: (state, action: PayloadAction<boolean>) => {
      state.snackBar = action.payload;
    }
  }
});

export const { darkMode, loggedIn, snackbar } = ToggleSlice.actions;

export const selectCount = (state: RootState) => state.mode.value;

export default ToggleSlice.reducer;
