import useNavbarController from "./navbar-controller";
import HeaderIcon from "../../assets/weather-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    searchInput,
    isDarkMode,
    onChnageOfSearchInput,
    onClickOfSearchButton,
    onToggleTheme,
  } = useNavbarController();

  return (
    <nav
      className={` ${
        isDarkMode
          ? "bg-black border-gray-700 text-gray-200"
          : "bg-white border-gray-200 "
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between flex-col md:flex-row mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3  rtl:space-x-reverse"
        >
          <img src={HeaderIcon} className="h-13" alt="Navbar Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Weather App
          </span>
        </Link>

        <div className="flex flex-col justify-center items-center gap-4 mt-3 sm:mt-0 sm:flex-row w-full md:w-auto">
          <label className="inline-flex items-center me-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={(e) => onToggleTheme(e.target.checked)}
              checked={isDarkMode}
            />
            <div
              className={`relative w-11 h-6  rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] peer-focus:ring-slate-500 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                isDarkMode
                  ? "bg-gray-900 peer-checked:bg-gray-600"
                  : "bg-gray-400 peer-checked:bg-gray-400"
              }`}
            ></div>
            <span
              className={`ms-3 w-20 text-sm font-medium ${
                isDarkMode ? " text-gray-200" : "text-gray-900"
              }`}
            >
              Dark Mode
            </span>
          </label>

          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>

            <div className="flex justify-center items-center gap-4 w-full">
              <input
                type="text"
                id="search-navbar"
                className={`p-2 w-full ps-10 text-sm  rounded-lg text-gray-900  focus:ring-blue-500 focus:border-blue-500 ${
                  isDarkMode
                    ? "bg-gray-200 "
                    : "border border-gray-300 bg-gray-50"
                }`}
                value={searchInput}
                onChange={onChnageOfSearchInput}
                placeholder="Enter city for weather"
              />

              <button
                type="button"
                value={searchInput}
                onClick={onClickOfSearchButton}
                className={`text-white bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-900"
                }`}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
