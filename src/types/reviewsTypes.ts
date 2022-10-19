// path: src/types/reviewsTypes.ts

export interface Review {
  _id: string;
  rating: number;
  comment: string;
  user: string;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface IReviewsState {
  reviews: Review[];
  loading: boolean;
  error: string;
}

export enum IReviewsActionTypes {
  ALL_REVIEWS_REQUEST = "ALL_REVIEWS_REQUEST",
  ALL_REVIEWS_SUCCESS = "ALL_REVIEWS_SUCCESS",
  ALL_REVIEWS_FAIL = "ALL_REVIEWS_FAIL",
  CLEAR_ERRORS = "CLEAR_ERRORS",
}

export interface allReviewsRequest {
  type: IReviewsActionTypes.ALL_REVIEWS_REQUEST;
}

export interface allReviewsSuccess {
  type: IReviewsActionTypes.ALL_REVIEWS_SUCCESS;
  payload: IReviewsState["reviews"];
}

export interface allReviewsFail {
  type: IReviewsActionTypes.ALL_REVIEWS_FAIL;
  payload: IReviewsState["error"];
}

export type IReviewsActions =
  | allReviewsRequest
  | allReviewsSuccess
  | allReviewsFail
  | clearErrors;
