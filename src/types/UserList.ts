import { User } from "./User";

export interface UserListState {
  users?: User[];
  loading?: boolean;
  error?: Error;
}

export enum UserListActionTypes {
    ALL_USERS_REQUEST = "ALL_USERS_REQUEST",
    ALL_USERS_SUCCESS = "ALL_USERS_SUCCESS",
    ALL_USERS_FAIL = "ALL_USERS_FAIL"
}

export interface userListRequest {
    type: UserListActionTypes.ALL_USERS_REQUEST
    payload: any
}

export interface userListSuccess {
    type: UserListActionTypes.ALL_USERS_SUCCESS
    payload: User
}
export interface userListFail{
    type: UserListActionTypes.ALL_USERS_FAIL
    payload: Error
}

export type UserListTypes =
| userListRequest
| userListSuccess
| userListFail