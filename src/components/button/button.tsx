import { Link } from "react-router-dom";

const Button: React.FC<{
  cityName: string;
  btnText: string;
  isForecastPage?: boolean;
}> = ({ cityName, btnText, isForecastPage }) => {
  return (
    <Link to={`/city/${cityName}${!isForecastPage ? "/forecast" : ""}`}>
      <div className="text-center">
        <button className="mt-4 mb-5 px-6 cursor-pointer py-3 bg-gray-900 text-white rounded-full font-semibold md:mb-0 hover:bg-black transition">
          {btnText}
        </button>
      </div>
    </Link>
  );
};

export default Button;
