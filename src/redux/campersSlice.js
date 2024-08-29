import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../constant';


export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
});

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default campersSlice.reducer;