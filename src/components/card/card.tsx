import { WEATHER_URL } from "../../constants";
import type { IShowWeatherData } from "../../types";

const Card = ({
  weatherType,
  temperature,
  windSpeed,
  iconId,
}: IShowWeatherData) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white bg-opacity-5 rounded-2xl p-6 shadow-md">
      <div>
        <p className="text-xl font-semibold ">Temperature: {temperature}°C</p>
        <p className="text-md ">Weather: {weatherType}</p>
        <p className="text-md ">Wind: {windSpeed} m/s</p>
      </div>
      <img
        src={`${WEATHER_URL.WEATHER_ICON_BASE_URL}/${iconId}@4x.png`}
        className="w-20 h-20"
      />
    </div>
  );
};

export default Card;
