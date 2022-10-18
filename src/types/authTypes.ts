//path ./src/types/authTypes.ts
// Compare this snippet from src/stores/reducers/authReducer.ts:

//create interfaces for authReducer

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
}

export interface IAuthActions {
  type: string;
  payload: any;
}

export enum IAuthActions {
  LOAD_USER_REQUEST = "LOAD_USER_REQUEST",
  LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS",
  LOAD_USER_FAIL = "LOAD_USER_FAIL",
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  REGISTER_REQUEST = "REGISTER_REQUEST",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAIL = "REGISTER_FAIL",
}
