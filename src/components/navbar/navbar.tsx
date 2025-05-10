import useNavbarController from "./navbar-controller";
import HeaderIcon from "../../assets/weather-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { searchInput, onChnageOfSearchInput, onClickOfSearchButton } =
    useNavbarController();

  return (
    <nav className="bg-white border-gray-200">
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

        <div className="flex w-full md:w-auto">
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
                className=" p-2 w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                value={searchInput}
                onChange={onChnageOfSearchInput}
                placeholder="Enter city for weather"
              />

              <button
                type="button"
                value={searchInput}
                onClick={onClickOfSearchButton}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 "
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
