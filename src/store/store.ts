import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./slices/weather-data-slice";
import themeDataReducer from "./slices/theme-slice";

export const store = configureStore({
  reducer: { themeSlice: themeDataReducer, weatherSlice: weatherDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
