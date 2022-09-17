import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "brand.400",
};

export const colorSlice = createSlice({
  name: "colorSelector",
  initialState,
  reducers: {
    selectColor: (state, action) => {
      state.color = action.payload;
      console.log(state.color);
    },
  },
});

export const { selectColor } = colorSlice.actions;

export default colorSlice.reducer;
