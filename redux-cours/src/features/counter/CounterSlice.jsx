import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    displayedNumber: 0,
  },
  reducers: {
    incrementer: (state /*, action*/) => {
      state.displayedNumber += 1;
    },
    decrementer: (state /*, action*/) => {
      state.displayedNumber -= 1;
    },
    incrementerByAmount: (state, action) => {
      state.displayedNumber += action.payload;
    },
  },
});

export const { incrementer, decrementer, incrementerByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
