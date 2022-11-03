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


// export const removeFromCart =
//   (id: string): AppThunk =>
//   async (dispatch, getState) => {
//     dispatch({
//       type: CartActionTypes.CART_REMOVE_ITEM,
//       payload: id,
//     });

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(getState().cart?.cartItems)
//     );
//   };

// /**
//  * Remove the product from cart
//  *
//  */
// export const removeProductFromCart =
//   (id: string): AppThunk =>
//   async (dispatch, getState) => {
//     try {
//       dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       if (userInfo) {
//         // Axios config
//         const config = {
//           withCredentials: true,

//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${userInfo}`,
//           },
//         };

//         const { data } = await axios.delete(`/user/cart/remove/${id}`, config);

//         dispatch({
//           type: CartActionTypes.CART_UPDATE_SUCCESS,
//           payload: data.cart,
//         });
//         localStorage.setItem("cartItems", JSON.stringify(data.cart));
//       }
//     } catch (error) {
//       dispatch({
//         type: CartActionTypes.CART_UPDATE_FAIL,
//         payload: errorHandler(error),
//       });
//     }
//   };

// /**
//  * Clear the cart
//  *
//  */
// export const clearCart = (): AppThunk => async (dispatch, getState) => {
//   try {
//     dispatch({ type: CartActionTypes.CART_UPDATE_REQUEST });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     if (userInfo) {
//       // Axios config
//       const config = {
//         withCredentials: true,

//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${userInfo}`,
//         },
//       };

//       const { data } = await axios.delete(`/user/cart/clear`, config);

//       dispatch({
//         type: CartActionTypes.CART_UPDATE_SUCCESS,
//         payload: data.cart,
//       });
//       localStorage.setItem("cartItems", JSON.stringify(data.cart));
//     }
//   } catch (error) {
//     dispatch({
//       type: CartActionTypes.CART_UPDATE_FAIL,
//       payload: errorHandler(error),
//     });
//   }
// };

/*export const addToCartHandler = async () => {
  try {
    const { data } = await axios.post(
      "/user/cart",
      { productId: product._id, quantity },
      config
    );
    dispatch(updateCart());
    // toast.success("Added to cart");
  } catch (error) {
    //toast.error(errorHandler(error));
    console.log(error);
  }
};*/

// /**
//  * Save shipping address action creator
//  * Actions related to saving a shipping address
//  */
// export const saveShippingAddress =
//   (data: ShippingAddress): AppThunk =>
//   async (dispatch) => {
//     dispatch({
//       type: CartActionTypes.CART_SAVE_SHIPPING_ADDRESS,
//       payload: data,
//     });
//     localStorage.setItem("shippingAddress", JSON.stringify(data));
//   };

// /**
//  * Save payment method action creator
//  * Actions related to saving a method method
//  */
// export const savePaymentMethod =
//   (paymentMethod: string): AppThunk =>
//   async (dispatch) => {
//     dispatch({
//       type: CartActionTypes.CART_SAVE_PAYMENT_METHOD,
//       payload: paymentMethod,
//     });

//     localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
//   };
