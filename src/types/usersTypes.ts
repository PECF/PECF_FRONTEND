// path: src/types/usersTypes.ts

export interface User {
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

export interface IUsersState {
  users: User[];
  user: User | null;
  loading: boolean;
  error: string;
}

export enum IUsersActionTypes {
  ALL_USERS_REQUEST = "ALL_USERS_REQUEST",
  ALL_USERS_SUCCESS = "ALL_USERS_SUCCESS",
  ALL_USERS_FAIL = "ALL_USERS_FAIL",
  CLEAR_ERRORS = "CLEAR_ERRORS",
}

export interface allUsersRequest {
  type: IUsersActionTypes.ALL_USERS_REQUEST;
}

export interface allUsersSuccess {
  type: IUsersActionTypes.ALL_USERS_SUCCESS;
  payload: IUsersState["users"];
}

export interface allUsersFail {
  type: IUsersActionTypes.ALL_USERS_FAIL;
  payload: IUsersState["error"];
}

export type IUsersActions =
  | allUsersRequest
  | allUsersSuccess
  | allUsersFail
  | clearErrors;
