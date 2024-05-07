import { createSlice } from "@reduxjs/toolkit";

const favs =
  localStorage.getItem("fav") !== null
    ? JSON.parse(localStorage.getItem("fav"))
    : [];

const favSlice = createSlice({
  name: "fav",
  initialState: {
    fav: favs,
  },
  reducers: {
    addToFav(state, action) {
      state.fav.push(action.payload);
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
    removeFromFav(state, action) {
      state.fav = state.fav.filter((fav) => fav.recipeUrl !== action.payload);
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
  },
});

export default favSlice.reducer;
export const { addToFav, removeFromFav } = favSlice.actions;
