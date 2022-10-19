import { CartState } from "./Cart"
import { OrderCreateState } from './orderCreate';
import { MyOrderState } from './myOrder';
import { OrderListState } from './orderList';
import { OrderDetailState } from './orderDetail';
import { ProductDeleteState } from './productDelete';
import { ProductDetailState } from './productDetails';
import { ProductCreateState } from './productCreate';
import { ProductState } from './productList';
import { ProductCreateReviewState } from './productReview';
import { reviewState } from './reviewList';
import { deleteReviewState } from './deleteReview';
import { UserLoginState } from './userLogin';
import { UserRegisterState } from './userRegister';
import { LoadUserState } from './userLoad';
import { LogoutState } from './userLogout';
import { UserProfileUpdateState } from './userProfileUpdate';
import { UpdatePasswordState } from './updatePassword';
import { ForgotPasswordState } from './forgotPassword';
import { ResetPasswordState } from './resetPassowrd';
import { UserListState } from './UserList';
import { UserDetailsState } from './userDetail';
import { UserUpdateState } from "./userUpdate";
import { UserDeleteState } from './deleteUser';

export interface ReduxState {
    cart: CartState
    orderCreate: OrderCreateState
    myOrder: MyOrderState
    orderDetail: OrderDetailState
    orderList: OrderListState
    productDelete: ProductDeleteState
    productDetail: ProductDetailState
    productCreate: ProductCreateState
    productList: ProductState
    createReview: ProductCreateReviewState
    reviewList: reviewState
    deleteReview: deleteReviewState
    userLogin: UserLoginState
    userRegister: UserRegisterState
    loadUser: LoadUserState
    userLogout: LogoutState
    userProfileUpdate: UserProfileUpdateState
    updatePassword: UpdatePasswordState
    forgotPassword: ForgotPasswordState
    resetPassword: ResetPasswordState
    userList: UserListState
    userDetail: UserDetailsState
    userUpdate: UserUpdateState
    userDelete: UserDeleteState
}