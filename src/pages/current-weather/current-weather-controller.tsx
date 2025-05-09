import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { onGetWeatherData } from "../../utilities/get-weather-data";
import type { RootState } from "../../store/store";
import {
  getCurrentWeatherData,
  getOneForecastPerDayFromNow,
} from "../../utilities/utils";

import {
  addCityName,
  addWeatherData,
  removeWeatherData,
} from "../../store/slices/weather-data-slice";

const useCurrentWeatherController = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);

  const { cityName } = useParams<{
    cityName: string;
  }>();

  const weatherData = useSelector(
    (store: RootState) => store.weatherSlice.weatherData
  );

  const dispatch = useDispatch();

  async function onGetCurrentWeather(city?: string): Promise<void> {
    try {
      const response = await onGetWeatherData(city || "");

      if (response.list && response.list.length > 0) {
        // Filtering out the current weather data
        const currentWeatherData = getCurrentWeatherData(response.list);
        const forecasteWeatherData = getOneForecastPerDayFromNow(response.list);

        // Adding Weather Data into the Store
        dispatch(
          addWeatherData({
            cityName: response?.city?.name || "",
            currentWeatherData: currentWeatherData,
            foreCastData: forecasteWeatherData,
          })
        );
      }

      setIsDataLoading(false);
      // setCurrentWeatherData(response);
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
      onGetCurrentWeather(cityName);
    }
  }, [cityName]);

  return {
    cityName,
    weatherData,
    isDataLoading,
    onGetCurrentWeather,
  };
};

export default useCurrentWeatherController;
