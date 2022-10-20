import { cartReducer } from "./reducers/cartReducer";
import { productsReducer } from "./reducers/productsReducer";
import { authReducer } from "./reducers/authReducer";
import { ordersReducer } from "./reducers/ordersReducer";
import { combineReducers } from "redux";
import { ReduxState } from "../types/reduxTypes";

export const rootReducer = combineReducers<ReduxState>({
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
  orders: ordersReducer,
});

export default rootReducer;
