import { productsReducer } from "./productsReducer";
import { ordersReducer } from "./ordersReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
  order: ordersReducer,
});

export default rootReducer;
