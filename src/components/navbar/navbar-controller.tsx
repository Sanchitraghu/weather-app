import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const useNavbarController = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const navigate = useNavigate();

  const onChnageOfSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = e.target.value;
    setSearchInput(searchInputValue);
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

    setSearchInput(crntCity.split("-").join(" ") || "");
  }, [location.pathname]);

  return { searchInput, onChnageOfSearchInput, onClickOfSearchButton };
};

export default useNavbarController;
