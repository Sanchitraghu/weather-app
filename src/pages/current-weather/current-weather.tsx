import { Button, Card, NoDataBanner } from "../../components";
import { SkeCurrentWeather } from "../../components/skeletons";
import { WEATHER_URL } from "../../constants";
import useCurrentWeatherController from "./current-weather-controller";
import { capitalize } from "../../utilities/utils";

const CurrentWeather = () => {
  const { weatherData, isDataLoading, isDarkMode } =
    useCurrentWeatherController();

  if (isDataLoading) {
    return <SkeCurrentWeather isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`min-h-[calc(100vh-5.25rem)]  px-4 py-6 md:px-12 lg:px-24 ${
        isDarkMode ? "bg-black text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      {weatherData?.currentWeatherData &&
      weatherData?.currentWeatherData?.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Weather in {capitalize(weatherData.cityName)}
            </h1>
            <p className="text-lg font-semibold">
              {weatherData.currentWeatherData[0].currentDate}
            </p>
          </div>

          {/* Main Current weather component */}
          <div
            className={`flex flex-col text-center sm:text-start sm:flex-row justify-between items-center bg-opacity-5 rounded-2xl p-6 shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
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
            <div className="flex gap-4 overflow-x-auto p-2">
              {weatherData?.currentWeatherData.slice(1).map((crntData) => (
                <Card {...crntData} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>

          {/* Forecast Button */}
          <Button
            btnText="Forecast Weather for This City"
            cityName={weatherData.cityName}
            isDarkMode={isDarkMode}
          />
        </div>
      ) : (
        <NoDataBanner cityName={weatherData.cityName} isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

export default CurrentWeather;
