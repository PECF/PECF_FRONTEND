import { UserLoginState, LoginTypes } from '../../types/userLogin';
import { UserRegisterState, TypesRegister } from '../../types/userRegister';
import { LoadUserState, LoadTypes } from '../../types/userLoad';
import { LogoutState, LogoutTypes } from '../../types/userLogout';
import { updateProfileTypes, UserProfileUpdateState } from '../../types/userProfileUpdate';
import { UserListState, UserListTypes } from '../../types/UserList';
import { UserDetailsState, UserDetailTypes } from '../../types/userDetail';
import { UserUpdateState, UserUpdateTypes } from '../../types/userUpdate';
import { UserDeleteState, UserDeleteTypes } from '../../types/deleteUser';
import { ResetPasswordState, ResetPasswordTypes } from '../../types/resetPassowrd';
import { UpdatePasswordState, UpdatePasswordTypes } from '../../types/updatePassword';
import { ForgotPasswordState, ForgotPasswordTypes } from '../../types/forgotPassword';

const loginInitialState: UserLoginState = {
  loading: false
}

export const userReducer = (state = loginInitialState, action: LoginTypes) => {
  const reducers = {
    LOGIN_REQUEST: {
      loading: true,
      isAuthenticated: false,
    },
    LOGIN_SUCCESS: {
      ...state,
      loading: false,
      isAuthenticated: true,
      user: action.payload,
    },
    LOGIN_FAIL: {
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const registerInitialState: UserRegisterState = {
  loading: false
}

export const registerReducer = (state = registerInitialState, action: TypesRegister) => {
  const reducers = {
    REGISTER_USER_REQUEST: {
      loading: true,
      isAuthenticated: false,
    },
    REGISTER_USER_SUCCESS: {
      ...state,
      loading: false,
      isAuthenticated: true,
      user: action.payload,
    },
    REGISTER_USER_FAIL: {
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const loadInitialState: LoadUserState = {
  loading: false
}

export const loadUserReducer = (state = loadInitialState, action: LoadTypes) => {
  const reducers = {
    LOAD_USER_REQUEST: {
      loading: true,
      isAuthenticated: false,
    },
    LOAD_USER_SUCCESS: {
      ...state,
      loading: false,
      isAuthenticated: true,
      user: action.payload,
    },
    LOAD_USER_FAIL: {
      loading: false,
      isAuthenticated: false,
      user: null,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const logoutInitialState: LogoutState = {
  loading: false
}

export const logoutReducer = (state = logoutInitialState, action: LogoutTypes) => {
  const reducers = {
    LOGOUT_SUCCESS: {
      loading: false,
      user: null,
      isAuthenticated: false,
    },
    LOGOUT_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const profileInitialState: UserProfileUpdateState = {
  loading: false
}

export const profileReducer = (state = profileInitialState, action: updateProfileTypes) => {
  const reducers = {
    UPDATE_PROFILE_REQUEST: {
      ...state,
      loading: true,
    },
    UPDATE_PROFILE_SUCCESS: {
      ...state,
      loading: false,
      isUpdated: action.payload,
    },
    UPDATE_PROFILE_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const updatePasswordInitialState: UpdatePasswordState = {
  loading: false
}

export const updatePasswordReducer = (state = updatePasswordInitialState, action: UpdatePasswordTypes) => {
  const reducers = {
    UPDATE_PASSWORD_REQUEST: {
      ...state,
      loading: true,
    },
    UPDATE_PASSWORD_SUCCESS: {
      ...state,
      loading: false,
      isUpdated: action.payload,
    },
    UPDATE_PASSWORD_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const forgotPasswordInitialState: ForgotPasswordState = {
  loading: false
}

export const forgotPasswordReducer = (state = forgotPasswordInitialState, action: ForgotPasswordTypes) => {
  const reducers = {
    FORGOT_PASSWORD_REQUEST: {
      ...state,
      loading: true,
      error: null,
    },
    FORGOT_PASSWORD_SUCCESS: {
      ...state,
      loading: false,
      message: action.payload,
    },
    FORGOT_PASSWORD_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const resetPasswordInitialState: ResetPasswordState = {
  loading: false
}

export const resetPasswordReducer = (state = resetPasswordInitialState, action: ResetPasswordTypes) => {
  const reducers = {
    RESET_PASSWORD_REQUEST: {
      ...state,
      loading: true,
      error: null,
    },
    RESET_PASSWORD_SUCCESS: {
      ...state,
      loading: false,
      success: action.payload,
    },
    RESET_PASSWORD_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const userListInitialState: UserListState = {
  loading: false
}

export const allUsersReducer = (state = userListInitialState, action: UserListTypes) => {
  const reducers = {
    ALL_USERS_REQUEST: {
      ...state,
      loading: true,
    },
    ALL_USERS_SUCCESS: {
      ...state,
      loading: false,
      users: action.payload,
    },
    ALL_USERS_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const detailInitialState : UserDetailsState = {
  loading: false
}

export const userDetailsReducer = (state = detailInitialState, action: UserDetailTypes) => {
  const reducers = {
    USER_DETAILS_REQUEST: {
      ...state,
      loading: true,
    },
    USER_DETAILS_SUCCESS: {
      ...state,
      loading: false,
      user: action.payload,
    },
    USER_DETAILS_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const updateUserInitialState: UserUpdateState = {
  loading: false
}

export const updateUserReducer = (state = updateUserInitialState, action: UserUpdateTypes) => {
  const reducers = {
    UPDATE_USER_REQUEST: {
      ...state,
      loading: true,
    },
    UPDATE_USER_SUCCESS: {
      ...state,
      loading: false,
      isUpdated: action.payload,
    },
    UPDATE_USER_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};

const deleteUserInitialState: UserDeleteState = {
  loading: false
}

export const deleteUserReducer = (state = deleteUserInitialState, action: UserDeleteTypes) => {
  const reducers = {
    DELETE_USER_REQUEST: {
      ...state,
      loading: true,
    },
    DELETE_USER_SUCCESS: {
      ...state,
      loading: false,
      isDeleted: action.payload.success,
      message: action.payload.message,
    },
    DELETE_USER_FAIL: {
      ...state,
      loading: false,
      error: action.payload,
    },
    CLEAR_ERRORS: {
      ...state,
      error: null,
    },
  };
  return reducers[action.type] || { ...state };
};
