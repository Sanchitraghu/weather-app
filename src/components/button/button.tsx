import { Link } from "react-router-dom";

const Button: React.FC<{
  cityName: string;
  btnText: string;
  isDarkMode: boolean;
  isForecastPage?: boolean;
}> = ({ cityName, btnText, isForecastPage, isDarkMode }) => {
  return (
    <Link to={`/city/${cityName}${!isForecastPage ? "/forecast" : ""}`}>
      <div className="text-center">
        <button
          className={`mt-4 mb-5 px-6 cursor-pointer py-3 e rounded-full bg-gray-800 font-semibold md:mb-0 hover:bg-black transition ${
            isDarkMode ? " hover:bg-gray-700" : " text-white"
          }`}
        >
          {btnText}
        </button>
      </div>
    </Link>
  );
};

export default Button;
