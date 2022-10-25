import axios from "axios";
import { CartActionTypes, ShippingAddress } from "../../types/cartTypes";
import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";

/**
 * Add to cart action creator
 * Actions related to adding products to the cart
 */

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

/**
 * Remove item from cart action creator
 * Actions related to removing an item from cart
 */
export const removeFromCart =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: CartActionTypes.CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

/**
 * Save shipping address action creator
 * Actions related to saving a shipping address
 */
export const saveShippingAddress =
  (data: ShippingAddress): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: CartActionTypes.CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };

/**
 * Save payment method action creator
 * Actions related to saving a method method
 */
export const savePaymentMethod =
  (paymentMethod: string): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: CartActionTypes.CART_SAVE_PAYMENT_METHOD,
      payload: paymentMethod,
    });

    localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
  };
