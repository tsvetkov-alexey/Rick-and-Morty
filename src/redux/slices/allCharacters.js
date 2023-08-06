import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAllCharacters = createAsyncThunk('allCharacters/fetchAllCharacters', async (params) => {
  const { page } = params;
  const { data } = await axios.get(`/character?page=${page}`);
  return data;
})

const initialState = {
  allCharacters: [],
  status: 'loading'
}

export const allCharacters = createSlice({
  name: 'allCharacters',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchAllCharacters.pending]: (state) => {
      state.allCharacters = [];
      state.status = 'loading';
    },
    [fetchAllCharacters.fulfilled]: (state, action) => {
      state.allCharacters = action.payload;
      state.status = 'success';
    },
    [fetchAllCharacters.rejected]: (state) => {
      state.allCharacters = [];
      state.status = 'error';
    }
  }
})

export default allCharacters.reducer;


