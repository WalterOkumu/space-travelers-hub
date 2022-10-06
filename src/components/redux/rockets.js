import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const link = 'https://api.spacexdata.com/v3/rockets';

export const rocketsThunk = createAsyncThunk('rockets/fetchData', async () => {
  const data = await fetch(link).then((res) => res.json());
  const arr = [];
  data.forEach((element) => {
    arr.push({ ...element, ...{ reserved: false, reservation: 'Reserve Rocket' } });
  });
  return arr;
});

function reservation(rocket) {
  if (rocket.reservation === 'Reserve Rocket') return 'Cancel Reservation';
  return 'Reserve Rocket';
}

const rocketsReducer = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserve(state, action) {
      const index = state.findIndex((rocket) => rocket.id === action.payload);
      const arr = state;
      arr[index].reserved = !state[index].reserved;
      arr[index].reservation = reservation(arr[index]);
      return arr;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rocketsThunk.fulfilled, (state, action) => {
      if (action.payload.length !== 0) return action.payload;
      return state;
    });
  },
});

export const { reserve } = rocketsReducer.actions;
export default rocketsReducer.reducer;
