import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./slices/favSlice";

const store = configureStore({
  reducer: {
    fav: favSlice,
  },
});

export default store;
