import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOption: {
    name: 'S01'
  },
  search: ''
}

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentOption(state, action) {
      state.currentOption.name = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    }
  }
})

export const {setCurrentOption, setSearch} = filter.actions;

export default filter.reducer;