import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IShowWeatherData, WeatherData } from "../../types";

export interface IWeatherSliceDataState {
  cityName: string;
  currentWeatherData: IShowWeatherData[] | null;
  foreCastData: WeatherData[] | null;
}

const initialState: IWeatherSliceDataState = {
  cityName: "",
  currentWeatherData: null,
  foreCastData: null,
};

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: initialState,
  },
  reducers: {
    addWeatherData: (state, action: PayloadAction<IWeatherSliceDataState>) => {
      state.weatherData = action.payload;
    },
    addCityName: (state, action: PayloadAction<string>) => {
      state.weatherData.cityName = action.payload;
    },
    removeWeatherData: (state) => {
      state.weatherData = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWeatherData, addCityName, removeWeatherData } =
  weatherDataSlice.actions;

export default weatherDataSlice.reducer;
