export interface ProductCreateReviewState {
    success?: boolean;
    loading?: boolean;
    error?: Error;
  }

export enum CreateReviewActionTypes {
    NEW_REVIEW_REQUEST = "NEW_REVIEW_REQUEST",
    NEW_REVIEW_SUCCESS = "NEW_REVIEW_SUCCESS",
    NEW_REVIEW_FAIL = "NEW_REVIEW_FAIL",
}

export interface ProductCreateReview{
    type: CreateReviewActionTypes.NEW_REVIEW_REQUEST
    payload: any
}
export interface ProductSuccessReview{
    type: CreateReviewActionTypes.NEW_REVIEW_SUCCESS
    payload: any
}
export interface ProductFailureReview{
    type: CreateReviewActionTypes.NEW_REVIEW_FAIL
    payload: Error
}

export type ReviewActionTypes =
| ProductCreateReview
| ProductSuccessReview
| ProductFailureReview