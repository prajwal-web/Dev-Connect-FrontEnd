/* eslint-disable react-refresh/only-export-components */
// redux/ToggleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CounterState {
  value: boolean;
  isLogin: boolean;
  snackBar: boolean;
  snackbarMessage: string; // Add snackbarMessage to store the message
}

const initialState: CounterState = {
  value: false,
  isLogin: true,
  snackBar: false,
  snackbarMessage: '' // Initialize snackbarMessage
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
    },
    setSnackbarMessage: (state, action: PayloadAction<string>) => {
      state.snackbarMessage = action.payload;
    }
  }
});

export const { darkMode, loggedIn, snackbar, setSnackbarMessage } = ToggleSlice.actions;

export const selectCount = (state: RootState) => state.mode.value;

export default ToggleSlice.reducer;
