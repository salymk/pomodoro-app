import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  font: "Kumbh Sans",
};

export const fontSlice = createSlice({
  name: "fontSelector",
  initialState,
  reducers: {
    selectFont: (state, action) => {
      state.font = action.payload;
      console.log(state.font);
    },
  },
});

export const { selectFont } = fontSlice.actions;

export default fontSlice.reducer;