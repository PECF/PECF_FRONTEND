import { CartState } from "./cartTypes";
import {
  OrderCreateState,
  OrderDeliverState,
  OrderDetailsState,
  OrderListState,
  OrderListMyState,
  OrderPayState,
} from "./ordersTypes";
import {
  ProductDetailsState,
  ProductListState,
  ProductCreateState,
  ProductCreateReviewState,
  ProductDeleteState,
  ProductTopState,
  ProductUpdateState,
} from "./productsTypes";

import {
  UserRegisterState,
  UserLoginState,
  UserDetailsState,
  UserDeleteState,
  UserListState,
  UserUpdateState,
  UserUpdateProfileState,
  UserForgotPassword,
} from "./authTypes";

export interface ReduxState {
  userLogin: UserLoginState;
  userRegister: UserRegisterState;
  productList: ProductListState;
  productDetails: ProductDetailsState;
  cart: CartState;
  userDetails: UserDetailsState;
  userUpdateProfile: UserUpdateProfileState;
  orderCreate: OrderCreateState;
  orderDetails: OrderDetailsState;
  orderPay: OrderPayState;
  orderDeliver: OrderDeliverState;
  orderListMy: OrderListMyState;
  orderList: OrderListState;
  userList: UserListState;
  userDelete: UserDeleteState;
  userUpdate: UserUpdateState;
  productDelete: ProductDeleteState;
  productCreate: ProductCreateState;
  productUpdate: ProductUpdateState;
  productCreateReview: ProductCreateReviewState;
  productTopRated: ProductTopState;
  userForgotPassword: UserForgotPassword;
}
