import productsReducer from "./productsReducer";
import { orderReducer } from "./orderReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth: authReducer,
  order: orderReducer,
});

export default rootReducer;
