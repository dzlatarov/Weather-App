import { createSlice } from "@reduxjs/toolkit";
import { METRIC_UNIT } from "../../constants";

const initialState = {
  value: [],
  forecast: [],
  city: '',
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherDetails: (state = initialState, action) => {
      state.value.push(action.payload);
    },
    addCityName: (state = initialState, action) => {
      state.city = action.payload;
    },
    clearWeatherDetails: (state) => {
      state.value = [];
    },
    addForecastData: (state = initialState, action) => {
      state.forecast = action.payload;
    },
    clearForecastData: (state = initialState) => {
      state.forecast = [];
    },
    clearCityName: (state) => {
      state.city = '';
    }
  },
});

export const {
  addWeatherDetails,
  addCityName,
  clearWeatherDetails,
  addForecastData,
  clearForecastData,
  clearCityName,
} = weatherSlice.actions;

export default weatherSlice.reducer;
