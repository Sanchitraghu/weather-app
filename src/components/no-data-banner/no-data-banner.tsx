import { WEATHER_URL } from "../../constants";

const NoDataBanner: React.FC<{
  cityName: string;
  isDarkMode: boolean;
}> = ({ cityName = "City", isDarkMode }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center text-center  px-6 py-12 md:py-24 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Image */}
      <img
        src={WEATHER_URL.NO_DATA_BANNER_IMAGE_URL}
        alt="Not Found"
        className="w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0 md:mr-12"
      />

      {/* Message */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Oops! Weather Not Found
        </h2>
        <p
          className={` max-w-md ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          We couldn't retrieve weather data for{" "}
          <span className="font-bold">{cityName}</span>. Please try again with a
          different city name.
        </p>
      </div>
    </div>
  );
};

export default NoDataBanner;
