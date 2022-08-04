import { configureStore } from "@reduxjs/toolkit";
import mainPage from "./Reducers/contentReducer";
import cartSlicer from "./Reducers/headerReducer";

export const store = configureStore({
  reducer: {
    cartSlicer,
    mainPage,
  },
});

window.store = store;
