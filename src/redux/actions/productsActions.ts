import {
  ProductDetailsActionTypes,
  ProductListActionTypes,
  ProductCreateActionTypes,
  ProductCreateReviewActionTypes,
  ProductDeleteActionTypes,
  ProductUpdateActionTypes,
  ProductTopActionTypes,
} from "../../types/productsTypes";
import axios from "axios";
import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";

export const getAllProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`/product/all`);

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

export const getDetailsProduct =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`/product/${id}`);
      dispatch({
        type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

export const createProduct =
  ({ product, sendToDB }: { product: any; sendToDB: boolean }): AppThunk =>
  async (dispatch, getState) => {
    if (!sendToDB) {
      dispatch({
        type: ProductCreateActionTypes.PRODUCT_CREATE_PREVIEW,
        payload: product,
      });
    } else {
      try {
        dispatch({
          type: ProductCreateActionTypes.PRODUCT_CREATE_REQUEST,
        });

        if (sendToDB) {
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

          const { data } = await axios.post(
            `/admin/product/new`,
            product,
            config
          );

          dispatch({
            type: ProductCreateActionTypes.PRODUCT_CREATE_SUCCESS,
            payload: data.newProduct,
          });
          dispatch(getAllProducts());
        }
      } catch (error) {
        dispatch({
          type: ProductCreateActionTypes.PRODUCT_CREATE_FAILURE,
          payload: errorHandler(error),
        });
      }
    }
  };

export const updateProduct =
  ({ product, sendToDB }: { product: any; sendToDB: boolean }): AppThunk =>
  async (dispatch, getState) => {
    if (!sendToDB) {
      console.log(product);
      dispatch({
        type: ProductUpdateActionTypes.PRODUCT_UPDATE_PREVIEW,
        payload: product,
      });
    } else {
      try {
        dispatch({
          type: ProductUpdateActionTypes.PRODUCT_UPDATE_REQUEST,
        });

        if (sendToDB) {
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

          const { data } = await axios.put(
            `/admin/product/${product._id}`,
            product,
            config
          );

          dispatch({
            type: ProductUpdateActionTypes.PRODUCT_UPDATE_SUCCESS,
            payload: data.newProduct,
          });
          dispatch(getAllProducts());
        }
      } catch (error) {
        dispatch({
          type: ProductUpdateActionTypes.PRODUCT_UPDATE_FAILURE,
          payload: errorHandler(error),
        });
      }
    }
  };

export const updateProductVisibility =
  (id: string, visibility: boolean): AppThunk =>
  async (dispatch, getState) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `${userInfo}`,
        },
      };

      await axios.put(`/admin/product/visibility/${id}`, visibility, config);

      dispatch(getAllProductsAdmin());
    } catch (error) {
      dispatch({
        type: ProductUpdateActionTypes.PRODUCT_UPDATE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

export const getAllProductsAdmin =
  (): AppThunk => async (dispatch, getState) => {
    try {
      dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `${userInfo}`,
        },
      };

      const { data } = await axios.get(`/admin/product/all`, config);

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

export const getAdminProductDetails =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `${userInfo}`,
        },
      };

      const { data } = await axios.get(`/admin/product/${id}`, config);

      dispatch({
        type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

export const deleteProduct =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `${userInfo}`,
        },
      };

      await axios.delete(`/admin/product/${id}`, config);

      dispatch({
        type: ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS,
      });
      dispatch(getAllProductsAdmin());
    } catch (error) {
      dispatch({
        type: ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

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
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${userInfo?.token}`,
      //   },
      // };

      // await axios.post(`/api/products/${productId}/reviews`, review, config);

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
