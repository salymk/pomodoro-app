import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

const timeSlice = createSlice({
  name: "timeSetter",
  initialState,
  reducers: {
    setPomodoro: (state, action) => {
      state.pomodoro = action.payload;
    },
    setShortBreak: (state, aciton) => {
      state.shortBreak = aciton.payload;
    },
    setLongBreak: (state, action) => {
      state.longBreak = action.payload;
    },
  },
});

export const { setPomodoro, setShortBreak, setLongBreak } = timeSlice.actions;

export default timeSlice.reducer;
