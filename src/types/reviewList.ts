import { Review } from "./productList";

export interface reviewState {
    loading?: boolean;
    success?: boolean;
    review?: Review
    error?: Error
}

export enum reviewTypes {
    ALL_REVIEW_REQUEST = "ALL_REVIEW_REQUEST",
    ALL_REVIEW_SUCCESS = "ALL_REVIEW_SUCCESS",
    ALL_REVIEW_FAIL = "ALL_REVIEW_FAIL"
}

export interface reviewRequest {
    type: reviewTypes.ALL_REVIEW_REQUEST
    payload: any
}
export interface reviewSuccess {
    type: reviewTypes.ALL_REVIEW_SUCCESS
    payload: Review
}
export interface reviewFail{
    type: reviewTypes.ALL_REVIEW_FAIL
    payload: Error
}

export type ListReviews =
| reviewRequest
| reviewSuccess
| reviewFail