import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "",
};

export const slice = createSlice({
  name: "movieo",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImgURL: (state, action) => {
      state.imgURL = action.payload;
    },
  },
});

export const { setBannerData, setImgURL } = slice.actions;
export default slice.reducer;
