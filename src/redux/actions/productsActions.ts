import {
  ProductDetailsActionTypes,
  ProductListActionTypes,
  ProductCreateActionTypes,
  ProductCreateReviewActionTypes,
  ProductDeleteActionTypes,
  ProductUpdateActionTypes,
  TemporaryProduct,
  ProductTopActionTypes,
} from "../../types/productsTypes";
import axios from "axios";
import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";

/**
 * List Products action creator
 * Actions related to listing all products
 */
export const listProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`/product/all`);

    console.log(data);
    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * List Product Details action creator
 * Actions related to details of a specific product
 */
export const listProductDetails =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/products/${id}`);

      dispatch({
        type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to delete a product
 */
export const deleteProduct =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.delete(`/api/products/${id}`, config);

      dispatch({
        type: ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to create a product
 */
export const createProduct =
  ({ name, category, price, stock, description }: any): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ProductCreateActionTypes.PRODUCT_CREATE_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          Authorization: `${userInfo}`,
        },
      };
      const product = {
        name,
        category,
        price,
        stock,
        description,
      };

      const { data } = await axios.post(`/admin/product/new`, product, config);

      console.log(data);
      
      dispatch({
        type: ProductCreateActionTypes.PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductCreateActionTypes.PRODUCT_CREATE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to update a product
 */
export const updateProduct =
  (product: TemporaryProduct): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ProductUpdateActionTypes.PRODUCT_UPDATE_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      );

      dispatch({
        type: ProductUpdateActionTypes.PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });

      //TODO: Look into this issue from 78. Added this to fix the bug where an updated product was not showing new data in the form
      dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS });
    } catch (error) {
      dispatch({
        type: ProductUpdateActionTypes.PRODUCT_UPDATE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to create a new product review
 */
export const createProductReview =
  (productId: string, review: { rating: number; comment: string }): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS,
      });

      dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS });
    } catch (error) {
      dispatch({
        type: ProductCreateReviewActionTypes.PRODUCT_CREATE_REVIEW_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * List Top Products action creator
 * Actions related to listing all top products
 */
export const listTopProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: ProductTopActionTypes.PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);

    dispatch({
      type: ProductTopActionTypes.PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductTopActionTypes.PRODUCT_TOP_FAILURE,
      payload: errorHandler(error),
    });
  }
};