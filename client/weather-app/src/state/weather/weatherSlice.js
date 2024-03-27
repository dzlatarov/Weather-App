import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherDetails: (state = initialState, action) => {
      console.log(`Payload from slice ${action.payload}`);
      state.value.push(action.payload);
    },
    clearDetails: (state) => {
      state.value = {};
    },
  },
});

export const { addWeatherDetails, clearDetails } = weatherSlice.actions;

export default weatherSlice.reducer;
