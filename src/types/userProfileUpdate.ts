export interface UserProfileUpdateState {
    loading?: boolean;
    success?: boolean;
    isUpdated?: boolean;
    error?: Error;
  }

export enum UserUpdateActionTypes {
    UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST",
    UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS",
    UPDATE_PROFILE_FAIL = "UPDATE_PROFILE_FAIL"
}
  
export interface updateProfile {
    type: UserUpdateActionTypes.UPDATE_PROFILE_REQUEST
    payload: any
}

export interface updateProfileSuccess {
    type: UserUpdateActionTypes.UPDATE_PROFILE_SUCCESS
    payload: any
}
export interface updateProfileFail{
    type: UserUpdateActionTypes.UPDATE_PROFILE_FAIL
    payload: Error
}

export type updateProfileTypes =
| updateProfile
| updateProfileSuccess
| updateProfileFail