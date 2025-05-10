import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const useHomeController = () => {
  const themeData = useSelector(
    (store: RootState) => store.themeSlice.themeData
  );
  return { isDarkMode: themeData.theme === "dark" };
};

export default useHomeController;
