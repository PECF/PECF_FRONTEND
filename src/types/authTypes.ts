export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar: {
    public_id: string;
    url: string;
  };
  createdAt: string;
}

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
}

export enum IAuthActionTypes {
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
  CLEAR_ERRORS = "CLEAR_ERRORS",
}

export interface loadUserRequest {
  type: IAuthActionTypes.LOAD_USER_REQUEST;
}

export interface loadUserSuccess {
  type: IAuthActionTypes.LOAD_USER_SUCCESS;
  payload: IAuthState["user"];
}

export interface loadUserFail {
  type: IAuthActionTypes.LOAD_USER_FAIL;
  payload: IAuthState["error"];
}

export interface loginRequest {
  type: IAuthActionTypes.LOGIN_REQUEST;
}

export interface loginSuccess {
  type: IAuthActionTypes.LOGIN_SUCCESS;
  payload: IAuthState["user"];
}

export interface loginFail {
  type: IAuthActionTypes.LOGIN_FAIL;
  payload: IAuthState["error"];
}

export interface logoutSuccess {
  type: IAuthActionTypes.LOGOUT_SUCCESS;
}

export interface registerRequest {
  type: IAuthActionTypes.REGISTER_REQUEST;
}

export interface registerSuccess {
  type: IAuthActionTypes.REGISTER_SUCCESS;
  payload: IAuthState["user"];
}

export interface registerFail {
  type: IAuthActionTypes.REGISTER_FAIL;
  payload: IAuthState["error"];
}

export interface clearErrors {
  type: IAuthActionTypes.CLEAR_ERRORS;
}

export type IAuthActions =
  | loadUserRequest
  | loadUserSuccess
  | loadUserFail
  | loginRequest
  | loginSuccess
  | loginFail
  | logoutSuccess
  | registerRequest
  | registerSuccess
  | registerFail
  | clearErrors;
