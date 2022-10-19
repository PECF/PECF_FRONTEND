import {
  IAuthState,
  ICartState,
  IOrdersState,
  IProductsState,
  IReviewsState,
  IUsersState,
} from "./";

export interface ReduxState {
  auth: IAuthState;
  cart: ICartState;
  orders: IOrdersState;
  products: IProductsState;
  reviews: IReviewsState;
  users: IUsersState;
}
