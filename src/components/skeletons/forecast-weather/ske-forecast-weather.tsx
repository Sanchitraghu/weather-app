const SkeForecastWeather = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] bg-white text-black px-4 py-12 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-8 w-64 bg-gray-200 mx-auto rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 text-white rounded-2xl p-6 shadow flex flex-col items-center animate-pulse"
            >
              <div className="h-4 w-24 bg-gray-300 rounded mb-4"></div>
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-6 w-16 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-28 bg-gray-200 rounded mt-3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeForecastWeather;
