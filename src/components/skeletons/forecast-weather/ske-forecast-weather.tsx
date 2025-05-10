const SkeForecastWeather: React.FC<{
  isDarkMode: boolean;
}> = ({ isDarkMode }) => {
  return (
    <div
      className={`min-h-[calc(100vh-5.25rem)]  px-4 py-12 md:px-12 lg:px-24 ${
        isDarkMode ? "bg-black text-gray-200" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div
            className={`h-8 w-96 mx-auto rounded animate-pulse ${
              isDarkMode ? "bg-gray-500 text-white" : "bg-gray-300 text-black"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow flex flex-col items-center animate-pulse ${
                isDarkMode ? "bg-gray-500 text-white" : "bg-gray-100 text-black"
              }`}
            >
              <div className="h-4 w-24 bg-gray-300 rounded mb-4"></div>
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-6 w-16 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-28 bg-gray-200 rounded mt-3"></div>
            </div>
          ))}
        </div>
        {/*  Button Skeleton */}
        <div className="text-center animate-pulse">
          <div
            className={`mt-7 mb-5 px-6 py-3 rounded-full w-64 h-10 mx-auto  ${
              isDarkMode ? "bg-gray-500 text-white" : "bg-gray-100 text-black"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkeForecastWeather;
