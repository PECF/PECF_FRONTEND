import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { useEffect } from "react";
import { listProducts } from "../redux/actions/productsActions";

export const useLoad = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return false;
};
