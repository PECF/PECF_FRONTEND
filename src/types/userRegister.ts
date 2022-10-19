import { User } from './User';

export interface UserRegisterState {
    user?: User;
    loading?: boolean;
    isAuthenticated?: boolean;
    error?: Error;
  }

export enum UserRegisterTypes {
    REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST",
    REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS",
    REGISTER_USER_FAIL = "REGISTER_USER_FAIL" 
}

export interface userRegisterRequest { 
    type: UserRegisterTypes.REGISTER_USER_REQUEST
    payload: any
}

export interface userRegisterSuccess {
    type: UserRegisterTypes.REGISTER_USER_SUCCESS
    payload: User
}

export interface userRegisterFailure{
    type: UserRegisterTypes.REGISTER_USER_FAIL
    payload: Error
}

export type TypesRegister = 
| userRegisterRequest
| userRegisterSuccess
| userRegisterFailure
  