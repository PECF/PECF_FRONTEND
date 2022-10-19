import { IProductsActions } from "../../types/productTypes";

export const getProducts =
  (keyword = "", currentPage = 1, price, category, rating = 0) =>
  async (dispatch: any) => {
    try {
      dispatch({ type: IProductsActions.GET_PRODUCTS_REQUEST });

      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&rating[gte]=${rating}`;

      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&rating[gte]=${rating}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: IProductsActions.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: IProductsActions.GET_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetails = (id: string) => async (dispatch: any) => {
  try {
    dispatch({ type: IProductsActions.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: IProductsActions.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: IProductsActions.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch: any) => {
  dispatch({
    type: IProductsActions.CLEAR_ERRORS,
  });
};

// import axios from "axios";

// export const getProducts = (keyword = "", currentPage = 1, price, category) => async (dispatch) => {
//   try {
//     dispatch({ type: "GET_PRODUCTS_REQUEST" });

//     let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`;

//     if (category) {
//       link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}`;
//     }

//     const { data } = await axios.get(link);

//     dispatch({
//       type: "GET_PRODUCTS_SUCCESS",
//       payload: data,

// import axios from "axios";

// export const getProduct =
//   (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: "ALL_PRODUCT_REQUEST" });
//       dispatch({ type: "ADMIN_PRODUCT_REQUEST" });

//       let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`; //REEMPLAZAR RUTA

//       if (category) {
//         link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`; //REEMPLAZAR RUTA
//       }

//       const { data } = await axios.get(link);

//       dispatch({
//         type: "ALL_PRODUCT_SUCCESS",
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: "ALL_PRODUCT_FAIL",
//         payload: error.response.data.message,
//       });
//       dispatch({
//         type: "ADMIN_PRODUCT_FAIL",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // Create Product
// export const createProduct = (productData) => async (dispatch) => {
//   try {
//     dispatch({ type: "NEW_PRODUCT_REQUEST" });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.post(
//       `/api/v1/admin/product/new`, // REEMPLAZAR RUTA!
//       productData,
//       config
//     );

//     dispatch({
//       type: "NEW_PRODUCT_SUCCESS",
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: "NEW_PRODUCT_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// export const updateProduct = (id, productData) => async (dispatch) => {
//   try {
//     dispatch({ type: "UPDATE_PRODUCT_REQUEST" });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(
//       `/api/v1/admin/product/${id}`,
//       productData,
//       config
//     );

//     dispatch({
//       type: "UPDATE_PRODUCT_SUCCESS",
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: "UPDATE_PRODUCT_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// export const deleteProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "DELETE_PRODUCT_REQUEST" });

//     const { data } = await axios.delete(`/api/v1/admin/product/${id}`); //REEMPLAZAR RUTA!

//     dispatch({
//       type: "DELETE_PRODUCT_SUCCESS",
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: "DELETE_PRODUCT_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get Products Details
// export const getProductDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "PRODUCT_DETAILS_REQUEST" });

//     const { data } = await axios.get(`/api/v1/product/${id}`); //REEMPLAZAR RUTA!

//     dispatch({
//       type: "PRODUCT_DETAILS_SUCCESS",
//       payload: data.product,
//     });
//   } catch (error) {
//     dispatch({
//       type: "PRODUCT_DETAILS_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // NEW REVIEW
// export const newReview = (reviewData) => async (dispatch) => {
//   try {
//     dispatch({ type: "NEW_REVIEW_REQUEST" });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(`/api/v1/review`, reviewData, config); //REEMPLAZAR RUTA!

//     dispatch({
//       type: "NEW_REVIEW_SUCCESS",
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: "NEW_REVIEW_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get All Reviews of a Product
// export const getAllReviews = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "ALL_REVIEW_REQUEST" });

//     const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

//     dispatch({
//       type: "ALL_REVIEW_SUCCESS",
//       payload: data.reviews,
//     });
//   } catch (error) {
//     dispatch({
//       type: "ALL_REVIEW_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete Review of a Product
// export const deleteReviews = (reviewId, productId) => async (dispatch) => {
//   try {
//     dispatch({ type: "DELETE_REVIEW_REQUEST" });

//     const { data } = await axios.delete(
//       `/api/v1/reviews?id=${reviewId}&productId=${productId}` //REEMPLAZAR RUTA
//     );

//     dispatch({
//       type: "DELETE_REVIEW_SUCCESS",
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: "DELETE_REVIEW_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: "CLEAR_ERRORS" });
// };
