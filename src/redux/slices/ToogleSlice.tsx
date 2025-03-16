import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface CounterState {
  value: boolean,
}
const initialState: CounterState = {
  value: false
}

export const ToggleSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    darkMode: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

export const { darkMode } = ToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.mode.value

export default ToggleSlice.reducer