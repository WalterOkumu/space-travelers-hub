import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions';

const store = configureStore({
  reducer: {
    /* rockets: rocketsReducer, */
    missions: missionsSlice,
  },
});

export default store;
