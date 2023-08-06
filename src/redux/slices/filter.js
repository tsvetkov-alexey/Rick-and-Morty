import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOption: {
    name: 'S01'
  }
}

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentOption(state, action) {
      state.currentOption.name = action.payload
    }
  }
})

export const {setCurrentOption} = filter.actions;

export default filter.reducer;