import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "brand.400",
};

// createSlice generates action creators and action types for each
// individual reducer function you provide
export const colorSlice = createSlice({
  name: "colorSelector",
  initialState,
  // reducers are fuctions that calculate a new state value based on previous state + an action
  reducers: {
    selectColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { selectColor } = colorSlice.actions;

export default colorSlice.reducer;
