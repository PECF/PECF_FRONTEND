import {
  UserLoginAction,
  UserLoginActionTypes,
  UserLoginState,
  UserRegisterActionTypes,
  UserDeleteAction,
  UserDeleteActionTypes,
  UserDeleteState,
  UserDetailsAction,
  UserDetailsActionTypes,
  UserDetailsState,
  UserListAction,
  UserListActionTypes,
  UserListState,
  UserUpdateProfileAction,
  UserUpdateProfileActionTypes,
  UserUpdateProfileState,
  UserUpdateActionTypes,
  UserUpdateState,
  UserUpdateAction,
  UserForgotPasswordActionTypes,
  UserForgotPassword,
} from "../../types/authTypes";

export const userLoginReducer = (
  state: UserLoginState = {},
  action: UserLoginAction
) => {
  switch (action.type) {
    case UserLoginActionTypes.USER_LOGIN_REQUEST:
      return { loading: true, error: false, userInfo: false, isLogged: false };
    case UserLoginActionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
        isLogged: true,
      };
    case UserLoginActionTypes.USER_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
        userInfo: false,
        isLogged: false,
      };
    case UserLoginActionTypes.USER_LOGOUT:
      return { loading: false, error: false, userInfo: false, isLogged: false };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UserRegisterActionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case UserRegisterActionTypes.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserRegisterActionTypes.USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userForgotPasswordReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UserForgotPasswordActionTypes.USER_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case UserForgotPasswordActionTypes.USER_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserForgotPasswordActionTypes.USER_FORGOT_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (
  state: UserDetailsState = {},
  action: UserDetailsAction
) => {
  switch (action.type) {
    case UserDetailsActionTypes.USER_DETAILS_REQUEST:
      return { loading: true };
    case UserDetailsActionTypes.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case UserDetailsActionTypes.USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    case UserDetailsActionTypes.USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

const userUpdateProfileReducerInitialState: UserUpdateProfileState = {
  loading: false,
  success: false,
  error: false,
  userInfo: false,
};
export const userUpdateProfileReducer = (
  state: UserUpdateProfileState = userUpdateProfileReducerInitialState,
  action: UserUpdateProfileAction
) => {
  switch (action.type) {
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true, error: false, success: false };
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
        error: false,
      };
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        success: false,
        userInfo: false,
      };
    case UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_RESET:
      return {
        loading: false,
        error: false,
        success: false,
        userInfo: false,
      };
    default:
      return state;
  }
};

const userListReducerInitialState: UserListState = {
  loading: false,
  users: [],
  error: false,
  success: false,
};

export const userListReducer = (
  state: UserListState = userListReducerInitialState,
  action: UserListAction
) => {
  switch (action.type) {
    case UserListActionTypes.USER_LIST_REQUEST:
      return { loading: true, users: [], error: false, success: false };
    case UserListActionTypes.USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: false,
        success: false,
      };
    case UserListActionTypes.USER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        users: [],
        success: false,
      };
    case UserListActionTypes.USER_LIST_RESET:
      return { loading: false, users: [], error: false, success: false };
    default:
      return state;
  }
};

// const userDeleteInitialState: UserDeleteState = {
//   loading: false,
// };

// export const userDeleteReducer = (
//   state: UserDeleteState = userDeleteInitialState,
//   action: UserDeleteAction
// ) => {
//   switch (action.type) {
//     case UserDeleteActionTypes.USER_DELETE_REQUEST:
//       return { loading: true };
//     case UserDeleteActionTypes.USER_DELETE_SUCCESS:
//       return { loading: false, success: true };
//     case UserDeleteActionTypes.USER_DELETE_FAILURE:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const UserForgotPasswordInitialState: UserForgotPassword = {
//   loading: false,
// };

// export const userUpdateReducer = (
//   state: UserForgotPassword = UserForgotPasswordInitialState,
//   action: UserUpdateAction
// ) => {
//   switch (action.type) {
//     case UserUpdateActionTypes.USER_UPDATE_REQUEST:
//       return { loading: true, success: false, error: false };
//     case UserUpdateActionTypes.USER_UPDATE_SUCCESS:
//       return { loading: false, success: true, error: false };
//     case UserUpdateActionTypes.USER_UPDATE_FAILURE:
//       return { loading: false, error: action.payload, success: false };
//     case UserUpdateActionTypes.USER_UPDATE_RESET:
//       return {
//         loading: false,
//         error: false,
//         success: false,
//       };
//     default:
//       return state;
//   }
// };
