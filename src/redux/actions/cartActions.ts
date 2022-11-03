import axios from "axios";
import { CartActionTypes } from "../../types/cartTypes";
import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";

export const updateCart = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    if (userInfo) {
      // Axios config
      const config = {
        withCredentials: true,

        headers: {
          "Content-Type": "application/json",
          Authorization: `${userInfo}`,
        },
      };

      const { data } = await axios.get("/user/cart", config);
      dispatch({
        type: CartActionTypes.CART_UPDATE_SUCCESS,
        payload: data.cart,
      });
      localStorage.setItem("cartItems", JSON.stringify(data.cart));
    }
  } catch (error) {
    dispatch({
      type: CartActionTypes.CART_UPDATE_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const addToCart =
  (id: string, quantity: number): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      if (userInfo) {
        // Axios config
        const config = {
          withCredentials: true,

          headers: {
            "Content-Type": "application/json",
            Authorization: `${userInfo}`,
          },
        };

        await axios.put(`/user/cart/${id}`, { quantity }, config);
        dispatch(updateCart());
      } else {
        dispatch({
          type: CartActionTypes.CART_UPDATE_SUCCESS,
          payload: [],
        });
      }
    } catch (error) {
      dispatch(errorHandler(error));
    }
  };

export const removeFromCart =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      if (userInfo) {
        // Axios config
        const config = {
          withCredentials: true,

          headers: {
            "Content-Type": "application/json",
            Authorization: `${userInfo}`,
          },
        };

        await axios.delete(`/user/cart/${id}`, config);
        dispatch(updateCart());
      } else {
        dispatch({
          type: CartActionTypes.CART_UPDATE_SUCCESS,
          payload: [],
        });
      }
    } catch (error) {
      dispatch(errorHandler(error));
    }
  };

export const saveShippingAddress =
  (address: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      if (userInfo) {
        // Axios config
        const config = {
          withCredentials: true,

          headers: {
            "Content-Type": "application/json",
            Authorization: `${userInfo}`,
          },
        };

        await axios.put(`/user/cart/shipping`, { address }, config);
        dispatch(updateCart());
      } else {
        dispatch({
          type: CartActionTypes.CART_UPDATE_SUCCESS,
          payload: [],
        });
      }
    } catch (error) {
      dispatch(errorHandler(error));
    }
  };

export const savePaymentMethod =
  (paymentMethod: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      if (userInfo) {
        // Axios config
        const config = {
          withCredentials: true,

          headers: {
            "Content-Type": "application/json",
            Authorization: `${userInfo}`,
          },
        };

        await axios.put(`/user/cart/payment`, { paymentMethod }, config);
        dispatch(updateCart());
      } else {
        dispatch({
          type: CartActionTypes.CART_UPDATE_SUCCESS,
          payload: [],
        });
      }
    } catch (error) {
      dispatch(errorHandler(error));
    }
  };

export const clearCart = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    if (userInfo) {
      // Axios config
      const config = {
        withCredentials: true,

        headers: {
          "Content-Type": "application/json",
          Authorization: `${userInfo}`,
        },
      };

      await axios.delete(`/user/cart`, config);
      dispatch(updateCart());
    } else {
      dispatch({
        type: CartActionTypes.CART_UPDATE_SUCCESS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch(errorHandler(error));
  }
};
