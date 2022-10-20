import { useSelector } from "react-redux";
import { ReduxState } from "../types/reduxTypes";

export const useRecoveryData = (component: string) => {
  const response = useSelector((state: ReduxState) => state[component]);

  return response;
};
