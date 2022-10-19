import { productsReducer } from "./productsReducer";
import { ordersReducer } from "./ordersReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { ReduxState } from "../types/reduxTypes";
// import { usersReducer } from "./usersReducer";
// import { reviewsReducer } from "./reviewsReducer";

export const rootReducer = combineReducers<ReduxState>({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  // orders: ordersReducer,
  // users: usersReducer,
  // reviews: reviewsReducer,
});

export default rootReducer;
