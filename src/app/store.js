import { configureStore } from "@reduxjs/toolkit";
import fontSelectorReducer from "../features/font/fontSlice";
import colorSelectorReducer from "../features/color/colorSlice";
import timeSetterReducer from "../features/time/timeSlice";

// create a redux store to hold the whole state of the application
export const store = configureStore({
  // pass our reducers to the redux store
  reducer: {
    fontSelector: fontSelectorReducer,
    colorSelector: colorSelectorReducer,
    timeSetter: timeSetterReducer,
  },
});
