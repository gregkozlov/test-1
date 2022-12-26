import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const useTheme = () => {
  const theme = useSelector<RootState>((state) => state.rootReducer.layoutSliceReducer.theme);

  return theme as string;
};

export default useTheme;
