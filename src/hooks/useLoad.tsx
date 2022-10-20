import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useEffect } from "react";
import { getProducts } from "../../src/redux/actions/productsActions.ts";

export const useLoad = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return false;
};
