import { User } from "./User";

export interface UserDetailsState {
  user?: User;
  loading?: boolean;
  error?: Error;
}

export enum UserDetailActionTypes {
    USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
    USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
    USER_DETAILS_FAIL = "USER_DETAILS_FAIL"
}

export interface userDetailRequest {
    type: UserDetailActionTypes.USER_DETAILS_REQUEST
    payload: any
}
export interface userDetailSuccess {
    type: UserDetailActionTypes.USER_DETAILS_SUCCESS
    payload: User
}
export interface userDetailFailure{
    type: UserDetailActionTypes.USER_DETAILS_FAIL
    payload: Error
}

export type UserDetailTypes =
| userDetailRequest
| userDetailSuccess
| userDetailFailure