import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions';
import rocketsReducer from './rockets';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice,
  },
});
