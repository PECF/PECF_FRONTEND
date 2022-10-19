import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, Action } from "redux";
import rootReducer from "./reducers/rootReducer";
import { ReduxState } from "../types/reduxTypes";
const initialState = {};

const middleware = [thunk];

export type AppDispatch = ThunkDispatch<ReduxState, unknown, Action<string>>;

export type AppThunk = ThunkAction<
  Promise<void>,
  ReduxState,
  unknown,
  Action<string>
>;

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
