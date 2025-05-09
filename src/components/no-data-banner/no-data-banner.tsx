import { WEATHER_URL } from "../../constants";

const NoDataBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center bg-white text-gray-900 px-6 py-12 md:py-24">
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
        <p className="text-gray-700 max-w-md">
          We couldn't retrieve weather data for the city you searched. Please
          try again with a different city name.
        </p>
      </div>
    </div>
  );
};

export default NoDataBanner;
