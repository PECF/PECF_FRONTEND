import { useRecoveryData } from "./useRecoveryData";
import { AppDispatch } from "../redux/rootStore";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../redux/actions/authActions";
import { useEffect } from "react";

export const useAuth = () => {
  const { userInfo } = useRecoveryData("userLogin");

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails());
    }
  }, [dispatch, userInfo]);
};
