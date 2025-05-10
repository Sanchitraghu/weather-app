const SkeCurrentWeather: React.FC<{
  isDarkMode: boolean;
}> = ({ isDarkMode }) => {
  return (
    <div
      className={`min-h-[calc(100vh-5.25rem)]  px-4 py-6 md:px-12 lg:px-24  ${
        isDarkMode ? "bg-black text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto space-y-6 animate-pulse">
        {/* Header Section Skeleton */}
        <div className="text-center space-y-2">
          <div className="h-6 w-48 mx-auto bg-gray-300 rounded"></div>
          <div className="h-4 w-32 mx-auto bg-gray-300 rounded"></div>
        </div>

        {/* Main Card Skeleton */}
        <div className="bg-gray-100 rounded-xl  shadow-sm space-y-4">
          <div className="h-40 bg-gray-200 rounded-xl"></div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-2">
          <div className="h-5 w-56 mb-4 bg-gray-300 rounded"></div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="min-w-[120px] bg-gray-100 rounded-xl p-4 flex-shrink-0 space-y-2"
              >
                <div className="h-4 w-20 bg-gray-300 rounded mx-auto"></div>
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
                <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Button Skeleton */}
        <div className="text-center">
          <div className="mt-4 mb-5 px-6 py-3 bg-gray-300 rounded-full w-64 h-10 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeCurrentWeather;
