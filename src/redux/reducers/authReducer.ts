import {
  IAuthState,
  IAuthActions,
  IAuthActionTypes,
} from "../../types/authTypes";

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

export const authReducer = (
  state: IAuthState = initialState,
  action: IAuthActions
) => {
  const handlers = {
    [IAuthActionTypes.LOAD_USER_REQUEST]: () => ({ ...state, loading: true }),
    [IAuthActionTypes.LOAD_USER_SUCCESS]: (payload: IAuthState["user"]) => ({
      ...state,
      loading: false,
      isAuthenticated: true,
      user: payload,
    }),
    [IAuthActionTypes.LOAD_USER_FAIL]: (payload: IAuthState["error"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: payload,
    }),
    [IAuthActionTypes.LOGIN_REQUEST]: () => ({ ...state, loading: true }),
    [IAuthActionTypes.LOGIN_SUCCESS]: (payload: IAuthState["user"]) => ({
      ...state,
      loading: false,
      isAuthenticated: true,
      user: payload,
    }),
    [IAuthActionTypes.LOGIN_FAIL]: (payload: IAuthState["error"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: payload,
    }),
    [IAuthActionTypes.LOGOUT_SUCCESS]: () => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }),
    [IAuthActionTypes.REGISTER_REQUEST]: () => ({ ...state, loading: true }),
    [IAuthActionTypes.REGISTER_SUCCESS]: (payload: IAuthState["user"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: payload,
    }),
    [IAuthActionTypes.REGISTER_FAIL]: (payload: IAuthState["error"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: payload,
    }),
    [IAuthActionTypes.CLEAR_ERRORS]: () => ({ ...state, error: "" }),
    DEFAULT: () => state,
  };

  return handlers[action.type]
    ? handlers[action.type](action.payload)
    : handlers.DEFAULT();
};

