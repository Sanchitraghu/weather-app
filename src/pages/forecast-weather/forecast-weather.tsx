import { Button, Card, NoDataBanner } from "../../components";
import { SkeForecastWeather } from "../../components/skeletons";
import type { IShowWeatherData } from "../../types";
import { capitalize } from "../../utilities/utils";
import useForecastWeatherController from "./forecast-weather-controller";

const ForecastWeather = () => {
  const { weatherData, isDataLoading } = useForecastWeatherController();

  if (isDataLoading) {
    return <SkeForecastWeather />;
  }

  return (
    <div className="min-h-[calc(100vh-10rem)] bg-white text-black px-4 py-12 md:px-12 lg:px-24">
      {weatherData?.foreCastData && weatherData?.foreCastData?.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Weather Forecast For {capitalize(weatherData.cityName)}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {weatherData?.foreCastData.map((forecastData: IShowWeatherData) => (
              <Card {...forecastData} isForecastPage />
            ))}
          </div>

          {/* Current Weather Button */}
          <Button
            btnText="View Current Weather for This City"
            cityName={weatherData.cityName}
            isForecastPage
          />
        </div>
      ) : (
        <NoDataBanner />
      )}
    </div>
  );
};

export default ForecastWeather;
