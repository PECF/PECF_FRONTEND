import { WishlistAction, WishlistActionTypes, WishlistState } from '../../types/wishlistTypes';

const initialState: WishlistState = {
    wishListItems: [],
};

export const wishlistReducer = (
    state : WishlistState = initialState,
    action: WishlistAction
) => {
    switch (action.type) {
        case WishlistActionTypes.WISHLIST_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WishlistActionTypes.WISHLIST_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                wishListItems: action.payload,
            };
        case WishlistActionTypes.WISHLIST_ADD_ITEM:
            return {
                ...state,
                wishListItems: [action.payload],
            };
//         case WishListActionTypes.WISHLIST_REMOVE_ITEM:
//             return {
//                 ...state,
//                 wishListItems: state.wishListItems.filter(
//                     (item) => item.product !== action.payload
//                 ),
//             };
        default:
            return state;
    }
};

