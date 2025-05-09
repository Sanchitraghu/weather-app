import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNavbarController = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const navigate = useNavigate();

  const onChnageOfSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = e.target.value;
    setSearchInput(searchInputValue);
  };

  const onClickOfSearchButton = () => {
    const cityName = searchInput.toLowerCase().trim().split(" ").join("-");
    if (cityName.length === 0) return;

    navigate(`/city/${cityName}`);
  };

  useEffect(() => {
    const crntCity = location.pathname.split("/")[2];
    setSearchInput(crntCity || "");
  }, [location.pathname]);

  return { searchInput, onChnageOfSearchInput, onClickOfSearchButton };
};

export default useNavbarController;
