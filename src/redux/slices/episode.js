import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes', async (params) => {
  const { currentSeasonFilter } = params;
  const { data } = await axios.get(`/episode?episode=${currentSeasonFilter}`);
  return data;
})

const initialState = {
  episodes: [],
  status: 'loading'
}

export const episode = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchEpisodes.pending]: (state) => {
      state.episodes = [];
      state.status = 'loading';
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.episodes = action.payload;
      state.status = 'success';
    },
    [fetchEpisodes.rejected]: (state) => {
      state.episodes = [];
      state.status = 'error';
    }
  }
})

export default episode.reducer;