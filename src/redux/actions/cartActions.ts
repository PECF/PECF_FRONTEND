import { ICartActionTypes } from "../types/cartTypes";
import { AppThunk } from "../../../rootStore";
import { IShippingInfo } from "../../types/cartTypes";

export const addToCart =
  (id: string, quantity: number): AppThunk =>
  async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: ICartActionTypes.ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeCartItem =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: ICartActionTypes.REMOVE_CART_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const saveShippingInfo =
  (data: IShippingInfo): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: ICartActionTypes.SAVE_SHIPPING_INFO,
      payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };

export const savePaymentMethod =
  (data: string): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: ICartActionTypes.SAVE_PAYMENT_METHOD,
      payload: data,
    });
  };

export const clearCart = (): AppThunk => async (dispatch) => {
  dispatch({
    type: ICartActionTypes.CLEAR_CART,
  });

  localStorage.removeItem("cartItems");
};


