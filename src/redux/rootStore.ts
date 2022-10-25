import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { initialState, rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { ReduxState } from "../types/reduxTypes";
import { Action } from "redux";

const middleware = [thunk];

export type AppDispatch = ThunkDispatch<ReduxState, unknown, Action<string>>;

export type AppThunk = ThunkAction<
  Promise<void>,
  ReduxState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  // devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});
