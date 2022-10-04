import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missionSLice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

export default store;
