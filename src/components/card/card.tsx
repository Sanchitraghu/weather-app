import { WEATHER_URL } from "../../constants";
import type { IShowWeatherData } from "../../types";

const Card = ({
  weatherType,
  temperature,
  windSpeed,
  iconId,
  currentDate,
  timeStamp,
  isDarkMode,
  isForecastPage,
}: IShowWeatherData & { isForecastPage?: boolean; isDarkMode: boolean }) => {
  return (
    <div
      key={currentDate}
      className={`cursor-pointer rounded-2xl flex flex-col items-center justify-between transition-all duration-300 transform hover:-translate-y-1  ${
        isForecastPage
          ? "hover:shadow-2xl shadow-lg p-6"
          : "hover:shadow-lg shadow-sm py-4 px-8"
      } 
      ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"}
      `}
    >
      {isForecastPage ? (
        <p className="text-md font-medium tracking-wide mb-3">{currentDate}</p>
      ) : (
        <p className="text-lg font-medium ">{timeStamp}</p>
      )}

      <img
        src={`${WEATHER_URL.WEATHER_ICON_BASE_URL}/${iconId}@4x.png`}
        className={`mx-auto ${isForecastPage ? "w-20 h-20" : "w-12 h-12 "}`}
      />

      <p
        className={
          isForecastPage ? "text-3xl font-bold" : "text-lg font-semibold"
        }
      >
        {temperature}°C
      </p>

      {isForecastPage && (
        <>
          <p className={`text-base capitalize italic mt-2`}>{weatherType}</p>
          <p className="mt-2 text-sm font-medium tracking-wide">
            Wind: {windSpeed} m/s
          </p>
        </>
      )}
    </div>
  );
};

export default Card;
