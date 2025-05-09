import apiClient from "../api";
import type { WeatherApiResponseData } from "../types";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export async function onGetWeatherData(
  city: string
): Promise<WeatherApiResponseData> {
  try {
    const response = await apiClient.get<WeatherApiResponseData>("/forecast", {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY || "invalid Api key",
      },
    });

    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message;
    // Need to open notification for error message
    throw new Error(`${message}`);
  }
}
