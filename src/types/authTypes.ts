export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface TokenUser extends User {
  token: string;
}

export interface PasswordUser extends User {
  password: string;
}

export interface UserDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export enum UserDeleteActionTypes {
  USER_DELETE_REQUEST = "USER_DELETE_REQUEST",
  USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS",
  USER_DELETE_FAILURE = "USER_DELETE_FAILURE",
}

export interface UserDeleteRequestAction {
  type: UserDeleteActionTypes.USER_DELETE_REQUEST;
}

export interface UserDeleteSuccessAction {
  type: UserDeleteActionTypes.USER_DELETE_SUCCESS;
}

export interface UserDeleteFailureAction {
  type: UserDeleteActionTypes.USER_DELETE_FAILURE;
  payload: any;
}

export type UserDeleteAction =
  | UserDeleteRequestAction
  | UserDeleteSuccessAction
  | UserDeleteFailureAction;

export interface UserDetailsState {
  user?: User;
  loading?: boolean;
  error?: any;
}

export enum UserDetailsActionTypes {
  USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
  USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
  USER_DETAILS_FAILURE = "USER_DETAILS_FAILURE",
  USER_DETAILS_RESET = "USER_DETAILS_RESET",
}

export interface UserDetailsRequestAction {
  type: UserDetailsActionTypes.USER_DETAILS_REQUEST;
}

export interface UserDetailsSuccessAction {
  type: UserDetailsActionTypes.USER_DETAILS_SUCCESS;
  payload: User;
}

export interface UserDetailsFailureAction {
  type: UserDetailsActionTypes.USER_DETAILS_FAILURE;
  payload: any;
}

export interface UserDetailsResetAction {
  type: UserDetailsActionTypes.USER_DETAILS_RESET;
  payload: any;
}

export type UserDetailsAction =
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserDetailsFailureAction
  | UserDetailsResetAction;

export interface UserListState {
  users: User[];
  loading: boolean;
  error?: any;
}

export enum UserListActionTypes {
  USER_LIST_REQUEST = "USER_LIST_REQUEST",
  USER_LIST_SUCCESS = "USER_LIST_SUCCESS",
  USER_LIST_FAILURE = "USER_LIST_FAILURE",
  USER_LIST_RESET = "USER_LIST_RESET",
}

export interface UserListRequestAction {
  type: UserListActionTypes.USER_LIST_REQUEST;
}

export interface UserListSuccessAction {
  type: UserListActionTypes.USER_LIST_SUCCESS;
  payload: User[];
}

export interface UserListFailureAction {
  type: UserListActionTypes.USER_LIST_FAILURE;
  payload: any;
}

export interface UserListResetAction {
  type: UserListActionTypes.USER_LIST_RESET;
}

export type UserListAction =
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailureAction
  | UserListResetAction;

export interface UserLoginState {
  userInfo?: TokenUser;
  loading?: boolean;
  error?: any;
}

export enum UserLoginActionTypes {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE",
  USER_LOGOUT = "USER_LOGOUT",
}

export interface UserLoginRequestAction {
  type: UserLoginActionTypes.USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction {
  type: UserLoginActionTypes.USER_LOGIN_SUCCESS;
  payload: TokenUser;
}

export interface UserLoginFailureAction {
  type: UserLoginActionTypes.USER_LOGIN_FAILURE;
  payload: any;
}

export interface UserLogoutAction {
  type: UserLoginActionTypes.USER_LOGOUT;
}

export type UserLoginAction =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserLogoutAction;

export interface UserRegisterState {
  userInfo?: TokenUser;
  loading?: boolean;
  error?: any;
}

export enum UserRegisterActionTypes {
  USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE",
}

export interface UserRegisterRequestAction {
  type: UserRegisterActionTypes.USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction {
  type: UserRegisterActionTypes.USER_REGISTER_SUCCESS;
  payload: TokenUser;
}

export interface UserRegisterFailureAction {
  type: UserRegisterActionTypes.USER_REGISTER_FAILURE;
  payload: any;
}

export type UserRegisterAction =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction;

export interface UserUpdateState {
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export enum UserUpdateActionTypes {
  USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST",
  USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAILURE = "USER_UPDATE_FAILURE",
  USER_UPDATE_RESET = "USER_UPDATE_RESET",
}

export interface UserUpdateRequestAction {
  type: UserUpdateActionTypes.USER_UPDATE_REQUEST;
}

export interface UserUpdateSuccessAction {
  type: UserUpdateActionTypes.USER_UPDATE_SUCCESS;
}

export interface UserUpdateFailureAction {
  type: UserUpdateActionTypes.USER_UPDATE_FAILURE;
  payload: any;
}

export interface UserUpdateResetAction {
  type: UserUpdateActionTypes.USER_UPDATE_RESET;
}

export type UserUpdateAction =
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateFailureAction
  | UserUpdateResetAction;

export interface UserUpdateProfileState {
  userInfo?: TokenUser;
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export enum UserUpdateProfileActionTypes {
  USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST",
  USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS",
  USER_UPDATE_PROFILE_FAILURE = "USER_UPDATE_PROFILE_FAILURE",
  USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET",
}

export interface UserUpdateProfileRequestAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_REQUEST;
}

export interface UserUpdateProfileSuccessAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS;
  payload: TokenUser;
}

export interface UserUpdateProfileFailureAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_FAILURE;
  payload: any;
}

export interface UserUpdateProfileResetAction {
  type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_RESET;
}

export type UserUpdateProfileAction =
  | UserUpdateProfileRequestAction
  | UserUpdateProfileSuccessAction
  | UserUpdateProfileFailureAction
  | UserUpdateProfileResetAction;

export interface UserRegisterState {
  userInfo?: TokenUser;
  loading?: boolean;
  error?: any;
}

export interface UserRegisterRequestAction {
  type: UserRegisterActionTypes.USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction {
  type: UserRegisterActionTypes.USER_REGISTER_SUCCESS;
  payload: TokenUser;
}

export interface UserRegisterFailureAction {
  type: UserRegisterActionTypes.USER_REGISTER_FAILURE;
  payload: any;
}
