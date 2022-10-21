import { listProducts } from "../redux/actions/productsActions";
import { AppDispatch } from "../redux/rootStore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useLoad = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return false;
};
