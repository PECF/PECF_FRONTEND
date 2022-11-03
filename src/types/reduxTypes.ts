import { CartState } from "./cartTypes";
// import {
//   OrderCreateState,
//   OrderDeliverState,
//   OrderDetailsState,
//   OrderListState,
//   OrderListMyState,
//   OrderPayState,
// } from "./ordersTypes";
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
// import { WishlistState } from "./wishlistTypes";

export interface ReduxState {
  cart?: CartState;
  // wishlist?: WishlistState;
  userLogin: UserLoginState;
  userRegister?: UserRegisterState;
  productList?: ProductListState;
  productDetails?: ProductDetailsState;
  userDetails?: UserDetailsState;
  userUpdateProfile?: UserUpdateProfileState;
  // orderCreate?: OrderCreateState;
  // orderDetails?: OrderDetailsState;
  // orderPay?: OrderPayState;
  // orderDeliver?: OrderDeliverState;
  // orderListMy?: OrderListMyState;
  // orderList?: OrderListState;
  userList?: UserListState;
  userDelete?: UserDeleteState;
  userUpdate?: UserUpdateState;
  productDelete?: ProductDeleteState;
  productCreate?: ProductCreateState;
  productUpdate?: ProductUpdateState;
  productCreateReview?: ProductCreateReviewState;
  productTopRated?: ProductTopState;
  userForgotPassword?: UserForgotPassword;
}
