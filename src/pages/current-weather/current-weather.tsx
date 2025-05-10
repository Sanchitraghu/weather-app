import { Link } from "react-router-dom";
import { Button, Card, NoDataBanner } from "../../components";
import { SkeCurrentWeather } from "../../components/skeletons";
import { WEATHER_URL } from "../../constants";
import useCurrentWeatherController from "./current-weather-controller";
import { capitalize } from "../../utilities/utils";

const CurrentWeather = () => {
  const { weatherData, isDataLoading } = useCurrentWeatherController();

  if (isDataLoading) {
    return <SkeCurrentWeather />;
  }

  return (
    <div className="h-[calc(100vh-10rem)]  bg-white text-gray-900 px-4 py-6 md:px-12 lg:px-24">
      {weatherData?.currentWeatherData &&
      weatherData?.currentWeatherData?.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Weather in {capitalize(weatherData.cityName)}
            </h1>
            <p className="text-lg font-semibold text-gray-900">
              {weatherData.currentWeatherData[0].currentDate}
            </p>
          </div>

          {/* Main Current weather component */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white bg-opacity-5 rounded-2xl p-6 shadow-md">
            <div>
              <p className="text-xl font-semibold ">
                Temperature: {weatherData.currentWeatherData[0].temperature}°C
              </p>
              <p className="text-md ">
                Weather: {weatherData.currentWeatherData[0].weatherType}
              </p>
              <p className="text-md ">
                Wind: {weatherData.currentWeatherData[0].windSpeed} m/s
              </p>
            </div>
            <img
              src={`${WEATHER_URL.WEATHER_ICON_BASE_URL}/${weatherData.currentWeatherData[0].iconId}@4x.png`}
              className="w-20 h-20"
            />
          </div>

          {/* Timeline Weather Data */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Today's Weather Timeline</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {weatherData?.currentWeatherData.slice(1).map((crntData) => (
                <Card {...crntData} />
              ))}
            </div>
          </div>

          {/* Forecast Button */}
          <Button
            btnText="Forecast Weather for This City"
            cityName={weatherData.cityName}
          />
        </div>
      ) : (
        <NoDataBanner />
      )}
    </div>
  );
};

export default CurrentWeather;
