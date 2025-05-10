import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { onGetWeatherData } from "../../utilities/get-weather-data";

import {
  getCurrentWeatherData,
  getOneForecastPerDayFromNow,
} from "../../utilities/utils";

import {
  addCityName,
  addWeatherData,
  removeWeatherData,
} from "../../store/slices/weather-data-slice";
import { useParams } from "react-router-dom";

const useForecastWeatherController = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);

  const { cityName } = useParams<{
    cityName: string;
  }>();

  const weatherData = useSelector(
    (store: RootState) => store.weatherSlice.weatherData
  );

  const dispatch = useDispatch();

  async function onGetForecastWeather(city?: string): Promise<void> {
    try {
      const response = await onGetWeatherData(city || "");

      if (response.list && response.list.length > 0) {
        // Filtering out the current weather data
        const currentWeatherData = getCurrentWeatherData(response.list);
        const forecastWeatherData = getOneForecastPerDayFromNow(response.list);

        // Adding Weather Data into the Store
        dispatch(
          addWeatherData({
            cityName: response?.city?.name.toLowerCase() || "",
            currentWeatherData: currentWeatherData,
            foreCastData: forecastWeatherData,
          })
        );
      }

      setIsDataLoading(false);
    } catch (error: any) {
      setIsDataLoading(false);
      dispatch(addCityName(cityName || ""));
    }
  }

  useEffect(() => {
    if (!cityName) return;

    if (cityName !== weatherData.cityName) {
      setIsDataLoading(true);
      dispatch(removeWeatherData());
      onGetForecastWeather(cityName);
    } else if (isDataLoading) {
      setIsDataLoading(false);
    }
  }, [cityName]);

  return { weatherData, isDataLoading };
};

export default useForecastWeatherController;
