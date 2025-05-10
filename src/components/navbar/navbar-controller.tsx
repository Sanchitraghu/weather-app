import { useEffect, useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import { toggleTheme } from "../../store/slices/theme-slice";

const useNavbarController = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const themeData = useSelector(
    (store: RootState) => store.themeSlice.themeData
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChnageOfSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = e.target.value;
    setSearchInput(searchInputValue);
  };

  const onToggleTheme = (value: boolean) => {
    if (value) {
      dispatch(toggleTheme("dark"));
      localStorage.setItem("theme", "dark");
    } else {
      dispatch(toggleTheme("light"));
      localStorage.setItem("theme", "light");
    }
  };

  const onClickOfSearchButton = () => {
    const cityName = searchInput.toLowerCase().trim().split(" ").join("-");

    const crntCityName = location.pathname.split("/")[2];

    // If user search for the same city it will not navigate
    if (cityName.length === 0 || cityName === crntCityName) return;

    if (location.pathname.split("/")[3] === "forecast") {
      navigate(`/city/${cityName}/forecast`);
    } else {
      navigate(`/city/${cityName}`);
    }
  };

  useEffect(() => {
    const crntCity = location.pathname.split("/")[2];

    if (crntCity?.length === 0) {
      navigate("/");
    }

    setSearchInput(crntCity?.split("-")?.join(" ") || "");
  }, [location.pathname]);

  return {
    searchInput,
    isDarkMode: themeData.theme === "dark",
    onChnageOfSearchInput,
    onClickOfSearchButton,
    onToggleTheme,
  };
};

export default useNavbarController;
