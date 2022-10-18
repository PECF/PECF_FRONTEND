// path: ./src/stores/actions/cartAction.ts
// create cartAction with typescript, redux, react. All logic in function in other place, and not use switch case, use object for a ecommerce
// create ACTIONS for cartReducer

import { ICartActions, ICartState } from "../../types/cartTypes";

export const addToCart =
  (id: string, quantity: number) => async (dispatch: any, getState: any) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: ICartActions.ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        image: data.product.images[0].url,
        price: data.product.price,
        stock: data.product.stock,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart =
  (id: string) => async (dispatch: any, getState: any) => {
    dispatch({
      type: ICartActions.REMOVE_FROM_CART,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  }

export const saveShippingInfo =
  (data: ICartState["shippingInfo"]) => async (dispatch: any) => {
    dispatch({
      type: ICartActions.SAVE_SHIPPING_INFO,
      payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
  }


  

// import axios from "axios";

// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
//   const { data } = await axios.get(``); // FALTA LA RUTA!

//   const item = {
//     product: data.product._id,
//     name: data.product.name,
//     price: data.product.price,
//     image: data.product.images[0].url,
//     stock: data.product.Stock,
//     quantity,
//   };

//   const isItemExist = state.cartItems.find((i) => i.product === item.product);
//   try {
//     if (isItemExist) {
//       dispatch({
//         type: "ADD_TO_CART",
//         payload: item,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: "REMOVE_CART_ITEM",
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const saveShippingInfo = (data) => async (dispatch) => {
//   dispatch({
//     type: "SAVE_SHIPPING_INFO",
//     payload: data,
//   });

//   localStorage.setItem("shippingInfo", JSON.stringify(data));
// };
