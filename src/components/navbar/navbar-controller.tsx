import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const useNavbarController = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const navigate = useNavigate();

  const onChnageOfSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = e.target.value;
    setSearchInput(searchInputValue);
  };

  const onClickOfSearchButton = () => {
    navigate(`/forecast/${searchInput}`);
  };

  return { searchInput, onChnageOfSearchInput, onClickOfSearchButton };
};

export default useNavbarController;
