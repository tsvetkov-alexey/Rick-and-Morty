import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter";
import episode from "./slices/episode";

const store = configureStore({
  reducer: {
    filter,
    episode
  }
})

export default store;