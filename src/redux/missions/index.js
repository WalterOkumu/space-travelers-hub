import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = process.env.REACT_APP_MISSIONS_BASE_URL;

const initialState = {
  missions: [],
  loading: false,
};

export const loadMissions = createAsyncThunk('missions/loadMissions', async () => {
  const missions = await fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error);
    });
  return missions;
});

const generateObj = (data) => {
  const myList = [];

  for (let i = 0; i < data.length; i += 1) {
    myList[i] = {
      id: data[i].mission_id,
      mission_name: data[i].mission_name,
      description: data[i].description,
      member_status: false,
    };
  }
  return myList;
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadMissions.pending, (state) => ({ ...state, loading: true }))

      .addCase(loadMissions.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        missions: generateObj(payload),
      }));
  },
});

export const getAllMissions = (state) => state.missions.missions;
export const getStatus = (state) => state.missions.loading;

export default missionsSlice.reducer;
