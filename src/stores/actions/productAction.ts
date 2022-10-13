import axios from "axios";

export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: "ALL_PRODUCT_REQUEST" });
      dispatch({ type: "ADMIN_PRODUCT_REQUEST" });

      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`; //REEMPLAZAR RUTA

      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`; //REEMPLAZAR RUTA
      }

      const { data } = await axios.get(link);

      dispatch({
        type: "ALL_PRODUCT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ALL_PRODUCT_FAIL",
        payload: error.response.data.message,
      });
      dispatch({
        type: "ADMIN_PRODUCT_FAIL",
        payload: error.response.data.message,
      });
    }
  };
