import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  forecast: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherDetails: (state = initialState, action) => {
      console.log(`Payload from slice ${action.payload}`);
      state.value.push(action.payload);
    },
    clearWeatherDetails: (state) => {
      state.value = [];
    },
    addForecastData: (state = initialState, action) => {
      console.log(`addForecastData from slice ${action.payload}`);
      state.forecast = action.payload;
    },
    clearForecastData: (state = initialState) => {
      state.forecast = [];
    },
  },
});

export const {
  addWeatherDetails,
  clearWeatherDetails,
  addForecastData,
  clearForecastData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
