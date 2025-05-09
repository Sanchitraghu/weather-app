import { Card, NoDataBanner } from "../../components";
import { SkeCurrentWeather } from "../../components/skeletons";
import { WEATHER_URL } from "../../constants";
import useCurrentWeatherController from "./current-weather-controller";

const CurrentWeather = () => {
  const { weatherData, isDataLoading } = useCurrentWeatherController();

  if (!weatherData?.cityName.toLowerCase() || isDataLoading) {
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
              Weather in {weatherData.cityName}
            </h1>
            <p className="text-lg text-gray-900">
              {weatherData.currentWeatherData[0].currentDate}
            </p>
          </div>

          {/* Main Current weather component */}
          <Card {...weatherData.currentWeatherData[0]} />

          {/* Timeline Weather Data */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Today's Weather Timeline</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {weatherData?.currentWeatherData
                .slice(1)
                .map((crntData, index) => (
                  <div
                    key={index}
                    className="min-w-[120px] bg-white bg-opacity-5 rounded-xl p-4 text-center flex-shrink-0 shadow-sm"
                  >
                    <p className="text-lg font-medium ">{crntData.timeStamp}</p>
                    <img
                      src={`${WEATHER_URL.WEATHER_ICON_BASE_URL}/${crntData.iconId}@4x.png`}
                      className=" w-12 h-12 mx-auto"
                    />
                    <p className="text-lg ">{crntData.temperature}°C</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Forecast Button */}
          <div className="text-center">
            <button className="mt-4 mb-5 px-6 cursor-pointer py-3 bg-gray-900 text-white rounded-full font-semibold md:mb-0 hover:bg-black transition">
              Forecast Weather for This City
            </button>
          </div>
        </div>
      ) : (
        <NoDataBanner />
      )}
    </div>
  );
};

export default CurrentWeather;
