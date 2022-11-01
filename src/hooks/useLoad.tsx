import {
  getAllProducts,
  getAllProductsAdmin,
} from "../redux/actions/productsActions";
import { AppDispatch } from "../redux/rootStore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRecoveryData } from "./useRecoveryData";
export const useLoad = () => {
  const { user } = useRecoveryData("userDetails");

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (user?.role === "admin") {
      dispatch(getAllProductsAdmin());
    }
    if (user?.role === "user") {
      dispatch(getAllProducts());
    }
  }, [dispatch, user?.role]);
};
