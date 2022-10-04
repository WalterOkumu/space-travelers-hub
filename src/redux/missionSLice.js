import { createSlice } from '@reduxjs/toolkit';

export const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missionData: {},
    status: 'idle',
  },
  reducers: {
    fetchMissions: (state) => state,
  },
});

export const { fetchMissions } = missionSlice.actions;

export default missionSlice.reducer;
