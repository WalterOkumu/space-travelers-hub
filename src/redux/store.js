import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

export default store;
