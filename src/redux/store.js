import { configureStore } from '@reduxjs/toolkit';
import missionSLice from './missionSLice';

export default configureStore({
  reducer: {
    missions: missionSLice,
  },
});
