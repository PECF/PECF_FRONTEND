import { User } from './User';

export interface UserLoginState {
  user?: User;
  loading?: boolean;
  isAuthenticated?: boolean;
  error?: Error;
}

export enum LoginActionTypes {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL"
}

export interface LoginRequest {
    type: LoginActionTypes.LOGIN_REQUEST
    payload: any
}

export interface LoginSuccess {
    type: LoginActionTypes.LOGIN_SUCCESS
    payload: User;
}

export interface LoginFailure {
    type: LoginActionTypes.LOGIN_FAIL
    payload: Error
}

export type LoginTypes = 
| LoginRequest
| LoginSuccess
| LoginFailure