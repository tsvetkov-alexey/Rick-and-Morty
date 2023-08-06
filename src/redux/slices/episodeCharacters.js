import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchEpisodeCharacter = createAsyncThunk('episodeCharacter/fetchEpisodeCharacter', async (params) => {
  const { id } = params;
  const { data } = await axios.get(`/character/${id}`);
  console.log(data);
  return data;
})

const initialState = {
  character: [],
  status: 'loading'
}

export const episodeCharacter = createSlice({
  name: 'episodeCharacter',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchEpisodeCharacter.pending]: (state) => {
      state.character = [];
      state.status = 'loading';
    },
    [fetchEpisodeCharacter.fulfilled]: (state, action) => {
      state.character = action.payload;
      state.status = 'success';
    },
    [fetchEpisodeCharacter.rejected]: (state) => {
      state.characters = [];
      state.status = 'error';
    }
  }
})

export default episodeCharacter.reducer;


