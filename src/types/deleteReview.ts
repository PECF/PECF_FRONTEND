export interface deleteReviewState {
    loading?: boolean;
    success?: boolean;
    error?: Error;
}

export enum DeleteTypes {
    DELETE_REVIEW_REQUEST = "DELETE_REVIEW_REQUEST",
    DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS",
    DELETE_REVIEW_FAIL = "DELETE_REVIEW_FAIL"
}

export interface deleteReviewRequest {
    type: DeleteTypes.DELETE_REVIEW_REQUEST
    payload: any
}
export interface deleteReviewSuccess {
    type: DeleteTypes.DELETE_REVIEW_SUCCESS
    payload: any
}
export interface deleteReviewFail{
    type: DeleteTypes.DELETE_REVIEW_FAIL
    payload: Error
}

export type deleteReviewActions =
| deleteReviewRequest
| deleteReviewSuccess
| deleteReviewFail