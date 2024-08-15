import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
};

export const slice = createSlice({
  name: "movieo",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});

export const { setBannerData } = slice.actions;
export default slice.reducer;
