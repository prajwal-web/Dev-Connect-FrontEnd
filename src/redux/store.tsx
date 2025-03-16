import { configureStore } from '@reduxjs/toolkit';
import modeReducer from "./slices/ToogleSlice"; // Correct import

 const store = configureStore({
  reducer: {
    mode: modeReducer 
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;