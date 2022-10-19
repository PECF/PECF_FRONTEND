import axios from "axios";
import { ShippingInfo } from "../../types/Cart";
import { AppThunk } from "../rootStore";

export const addItemsToCart = (id: number, quantity: number): AppThunk => async (dispatch, getState) => {
  const { data } = await axios.get(``); // FALTA LA RUTA!

  const item = {
    product: data.product._id,
    name: data.product.name,
    price: data.product.price,
    image: data.product.images[0].url,
    stock: data.product.Stock,
    quantity,
  };

  const isItemExist = state.cartItems.find((i) => i.product === item.product);
  try {
    if (isItemExist) {
      dispatch({
        type: "ADD_TO_CART",
        payload: item,
      });
    }
  } catch (error) {
    console.log(error);
  }

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (id: number): AppThunk => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data: ShippingInfo) : AppThunk => async (dispatch) => {
  dispatch({
    type: "SAVE_SHIPPING_INFO",
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
