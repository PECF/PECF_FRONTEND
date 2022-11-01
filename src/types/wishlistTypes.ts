export interface WishList {
    _id?: string;
    user?: string;
    createdAt?: string;
    description?: string;
    image?: {
        url?: string;
    }[];
    name?: string;
    numReviews?: number;
    price?: number;
    rating?: number;
    stock?: number;
    visibility?: boolean;
    qty?: number;

}

export interface WishlistState {
    wishListItems?: WishList[];
}

export enum WishlistActionTypes {
    WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM',
    WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM',
    WISHLIST_UPDATE_REQUEST = 'WISHLIST_UPDATE_REQUEST',
    WISHLIST_UPDATE_SUCCESS = 'WISHLIST_UPDATE_SUCCESS',
    WISHLIST_UPDATE_FAIL = 'WISHLIST_UPDATE_FAIL',
}

export interface WishListUpdateRequestAction {
    type?: WishlistActionTypes.WISHLIST_UPDATE_REQUEST;
}

export interface WishListUpdateSuccessAction {
    type?: WishlistActionTypes.WISHLIST_UPDATE_SUCCESS;
    payload?: WishList;
}

export interface WishListUpdateFailAction {
    type?: WishlistActionTypes.WISHLIST_UPDATE_FAIL;
    payload?: string;
}

export interface WishListAddItemAction {
    type?: WishlistActionTypes.WISHLIST_ADD_ITEM;
    payload?: WishList;
}

export interface WishListRemoveItemAction {
    type?: WishlistActionTypes.WISHLIST_REMOVE_ITEM;
    payload?: string;
}


export type WishlistAction =
    | WishListAddItemAction
    | WishListRemoveItemAction
    | WishListUpdateRequestAction
    | WishListUpdateSuccessAction
    | WishListUpdateFailAction;