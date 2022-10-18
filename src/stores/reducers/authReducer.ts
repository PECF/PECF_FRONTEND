import { IAuthState, IAuthActions } from "../../types/authTypes";

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

export const authReducer = (
  state = initialState,
  action: IAuthActions
): IAuthState => {
  const handlers: Record<IAuthActions["type"], any> = {
    [IAuthActions.LOAD_USER_REQUEST]: () => ({ ...state, loading: true }),
    [IAuthActions.LOAD_USER_SUCCESS]: (payload: IAuthState["user"]) => ({
      ...state,
      loading: false,
      isAuthenticated: true,
      user: payload,
    }),
    [IAuthActions.LOAD_USER_FAIL]: (payload: IAuthState["error"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: payload,
    }),
    [IAuthActions.LOGIN_REQUEST]: () => ({ ...state, loading: true }),
    [IAuthActions.LOGIN_SUCCESS]: (payload: IAuthState["user"]) => ({
      ...state,
      loading: false,
      isAuthenticated: true,
      user: payload,
    }),
    [IAuthActions.LOGIN_FAIL]: (payload: IAuthState["error"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: payload,
    }),
    [IAuthActions.LOGOUT_SUCCESS]: () => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }),
    [IAuthActions.REGISTER_REQUEST]: () => ({ ...state, loading: true }),
    [IAuthActions.REGISTER_SUCCESS]: (payload: IAuthState["user"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: payload,
    }),
    [IAuthActions.REGISTER_FAIL]: (payload: IAuthState["error"]) => ({
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: payload,
    }),
  };

  return handlers[action.type] ? handlers[action.type](action.payload) : state;
};
