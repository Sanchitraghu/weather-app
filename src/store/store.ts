import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./slices/weather-data-slice";

export const store = configureStore({
  reducer: { weatherSlice: weatherDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
