import type { IShowWeatherData, WeatherData } from "../types";

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-GB");
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
): IShowWeatherData[] {
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

  const forecastArray = Array.from(resultMap.values())?.map((item) => {
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

  return forecastArray;
}

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
