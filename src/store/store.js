import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "./slice";

export const store = configureStore({
  reducer: {
    movieoData: movieoReducer,
  },
});
