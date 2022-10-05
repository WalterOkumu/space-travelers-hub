import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missionSLice';

const store = configureStore({
  reducer: {
    /* rockets: rocketsReducer, */
    missions: missionsSlice,
  },
});

export default store;
