import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter";
import episode from "./slices/episode";
import episodeCharacter from './slices/episodeCharacters';
import allCharacters from './slices/allCharacters';

const store = configureStore({
  reducer: {
    filter,
    episode,
    episodeCharacter,
    allCharacters,
  }
})

export default store;