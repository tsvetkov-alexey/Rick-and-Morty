import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOption: {
    name: 'S01'
  },
  search: '',
  page: 1
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
    },
    setPage(state, action) {
      state.page = action.payload;
  },
  }
})

export const {setCurrentOption, setSearch, setPage} = filter.actions;

export default filter.reducer;