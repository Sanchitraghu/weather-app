import HomeIcon from "../../assets/home-icon.svg";

const Home = () => {
  return (
    <div className="flex h-[calc(100vh-7.75rem)] sm:h-[calc(100vh-5.25rem)] bg-white text-black items-center justify-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left: Description */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-start">
            Weather Search & Forecast
          </h1>
          <p className="text-lg text-center md:text-start">
            Easily search the current weather of any city and get the forecast
            at a glance. Stay informed and plan your day better with our clean,
            simple, and accurate weather insights.
          </p>
        </div>

        {/* Right: Image with float animation */}
        <div className="flex justify-center items-center">
          <img
            src={HomeIcon}
            alt="Weather Illustration"
            className="w-50 h-50 sm:w-72 sm:h-72 animate-float"
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
