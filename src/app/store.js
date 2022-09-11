import { configureStore } from "@reduxjs/toolkit";
import fontSelectorReducer from "../features/font/fontSlice";

export const store = configureStore({
  reducer: { fontSelector: fontSelectorReducer },
});
