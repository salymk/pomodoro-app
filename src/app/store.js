import { configureStore } from "@reduxjs/toolkit";
import fontSelectorReducer from "../features/font/fontSlice";
import colorSelectorReducer from "../features/color/colorSlice";

export const store = configureStore({
  reducer: {
    fontSelector: fontSelectorReducer,
    colorSelector: colorSelectorReducer,
  },
});
