import { IProductActionTypes } from "../../types/productsTypes";
import { AppThunk } from "../../../rootStore";
import { IProduct } from "../../types/productTypes";
import axios from "axios";

export const getProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: IProductActionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/product/all");
    dispatch({
      type: IProductActionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: IProductActionTypes.GET_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.GET_PRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`/product/${id}`);

      dispatch({
        type: IProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: IProductActionTypes.GET_PRODUCT_DETAILS_FAIL,
      //   payload: error.response.data.message,
      // });
    }
  };

export const newReview =
  (reviewData: IProduct): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.NEW_REVIEW_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(`/api/v1/review`, reviewData, config);

      dispatch({
        type: IProductActionTypes.NEW_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: IProductActionTypes.NEW_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getAdminProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: IProductActionTypes.GET_ADMIN_PRODUCTS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/products`);

    dispatch({
      type: IProductActionTypes.GET_ADMIN_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: IProductActionTypes.GET_ADMIN_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteProduct =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.DELETE_PRODUCT_REQUEST });

      const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

      dispatch({
        type: IProductActionTypes.DELETE_PRODUCT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: IProductActionTypes.DELETE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const newProduct =
  (productData: IProduct): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.NEW_PRODUCT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        `/api/v1/admin/product/new`,
        productData,
        config
      );

      dispatch({
        type: IProductActionTypes.NEW_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: IProductActionTypes.NEW_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const updateProduct =
  (id: string, productData: IProduct): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.UPDATE_PRODUCT_REQUEST });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.put(
        `/api/v1/admin/product/${id}`,
        productData,
        config
      );

      dispatch({
        type: IProductActionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: IProductActionTypes.UPDATE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductReviews =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.GET_REVIEWS_REQUEST });

      const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

      dispatch({
        type: IProductActionTypes.GET_REVIEWS_SUCCESS,
        payload: data.reviews,
      });
    } catch (error) {
      dispatch({
        type: IProductActionTypes.GET_REVIEWS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const deleteReview =
  (id: string, productId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: IProductActionTypes.DELETE_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/api/v1/reviews?id=${id}&productId=${productId}`
      );

      dispatch({
        type: IProductActionTypes.DELETE_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: IProductActionTypes.DELETE_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = (): AppThunk => async (dispatch) => {
  dispatch({
    type: IProductActionTypes.CLEAR_ERRORS,
  });
};
