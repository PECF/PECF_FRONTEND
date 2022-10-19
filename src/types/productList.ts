export interface Product {
    name: string
    productId: number
    description: string
    image: string
    price: number
    rating: number
    category: string
    stock: number
    numReviews: number;
    reviews: Array<Review>;
}

export interface Review {
    name: string
    rating: number
    comment: string
    createdAt: string
}

export interface ProductState{
    success?: boolean;
    products?: Product[];
    loading?: boolean;
    error?: Error;
}

export enum ProductActionTypes {
    ALL_PRODUCT_REQUEST = "ALL_PRODUCT_REQUEST",
    ALL_PRODUCT_SUCCESS = "ALL_PRODUCT_SUCCESS",
    ALL_PRODUCT_FAIL = "ALL_PRODUCT_FAIL",
    ADMIN_PRODUCT_REQUEST = "ADMIN_PRODUCT_REQUEST",
    ADMIN_PRODUCT_SUCCESS = "ADMIN_PRODUCT_SUCCESS",
    ADMIN_PRODUCT_FAIL = "ADMIN_PRODUCT_FAIL"
}

export interface ListProductRequest {
    type: ProductActionTypes.ALL_PRODUCT_REQUEST
    payload: any
}
export interface ListProductSuccess {
    type: ProductActionTypes.ALL_PRODUCT_SUCCESS
    payload: { products: Product[]; productsCount: number; resultPerPage: number; filteredProductsCount: number }
}
export interface ListProductFailure {
    type: ProductActionTypes.ALL_PRODUCT_FAIL
    payload: Error
}
export interface AdminListRequest {
    type: ProductActionTypes.ADMIN_PRODUCT_REQUEST
    payload: any
}
export interface AdminListSuccess {
    type: ProductActionTypes.ADMIN_PRODUCT_SUCCESS
    payload: Product;
}
export interface AdminListFailure {
    type: ProductActionTypes.ADMIN_PRODUCT_FAIL
    payload: Error
}

export type ListProductActionTypes =
| ListProductRequest
| ListProductSuccess
| ListProductFailure
| AdminListRequest
| AdminListRequest
| AdminListSuccess