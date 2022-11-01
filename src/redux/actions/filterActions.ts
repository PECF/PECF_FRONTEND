import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";
import axios from "axios";
import { useRecoveryData } from "../../hooks/useRecoveryData";

export const filterByCategory = (category) => {
  try {
    const { products } = useRecoveryData("productList");
    const filteredProducts = products.filter((product) => {
      return (
        product.category.value.toString().toLowerCase() === category.toLowerCase
      );
    });
    return filteredProducts;
  } catch (err) {
    errorHandler(err);
  }
};