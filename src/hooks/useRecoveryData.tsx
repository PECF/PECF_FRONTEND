import { useSelector } from "react-redux";

export const useRecoveryData = (component: string) => {
  const response = useSelector((state: any) => state[component]);

  return response;
};
