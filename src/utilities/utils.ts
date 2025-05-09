import type { IShowWeatherData, WeatherData } from "../types";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString.replace(" ", "T"));
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const getCorrectTimeStamp = (date: string): string => {
  return new Date(date.replace(" ", "T")).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const getCurrentWeatherData = (
  data: WeatherData[]
): IShowWeatherData[] => {
  const todaysDate: Date = new Date();

  return data
    .filter(
      (item: WeatherData) =>
        new Date(item.dt_txt).toLocaleDateString() ===
        todaysDate.toLocaleDateString()
    )
    .map((item: WeatherData) => {
      return {
        temperature: item.main.temp,
        weatherType: item.weather[0].main,
        iconId: item.weather[0].icon,
        windSpeed: item.wind.speed,
        // Converting the time to 24 hour format
        timeStamp: getCorrectTimeStamp(item.dt_txt),
        currentDate: formatDate(item.dt_txt),
      };
    });
};

export function getOneForecastPerDayFromNow(
  forecasts: WeatherData[]
): WeatherData[] {
  const now = new Date();

  const resultMap = new Map();

  for (const item of forecasts) {
    const itemDate = new Date(item.dt_txt);

    if (itemDate >= now) {
      const dateKey = item.dt_txt.split(" ")[0];

      if (!resultMap.has(dateKey)) {
        resultMap.set(dateKey, item); // only take the first future entry per day
      }
    }
  }

  return Array.from(resultMap.values());
}
