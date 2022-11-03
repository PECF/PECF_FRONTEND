import axios from "axios";
import { WishlistActionTypes } from "../../types/wishlistTypes";
import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";

/**
 * Add to wishlist action creator
 * Actions related to adding products to the wishlist
 */

export const updateWishlist = (): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({ type: WishlistActionTypes.WISHLIST_UPDATE_REQUEST });
    
        const {
        userLogin: { userInfo },
        } = getState();
    
        if (userInfo) {
        // Axios config
        const config = {
            withCredentials: true,
    
            headers: {
            "Content-Type": "application/json",
            Authorization: `${userInfo}`,
            },
        };
    
        const { data } = await axios.get("/user/wishlist", config);
    
        dispatch({
            type: WishlistActionTypes.WISHLIST_UPDATE_SUCCESS,
            payload: data.wishlist,
        });
        localStorage.setItem("wishlistItems", JSON.stringify(data.wishlist));
        }
    } catch (error) {
        dispatch({
        type: WishlistActionTypes.WISHLIST_UPDATE_FAIL,
        payload: errorHandler(error),
        });
    }
    };

/**
 * Add to wishlist action creator
 * Actions related to adding products to the wishlist
 * 
 */
export const addToWishlist = (id: string): AppThunk => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: WishlistActionTypes.WISHLIST_ADD_REQUEST });

        const {
        userLogin: { userInfo },
        } = getState();

        if (userInfo) {
        // Axios config
        const config = {
            withCredentials: true,
            
            headers: {
            "Content-Type": "application/json",
            Authorization: `${userInfo}`,
            },
        };

        const { data } = await axios.put(
            `/user/wishlist/${id}`,
            {},
            config
        );

        dispatch({
            type: WishlistActionTypes.WISHLIST_ADD_SUCCESS,
            payload: data.wishlist,
        });
        localStorage.setItem("wishlistItems", JSON.stringify(data.wishlist));
        }
    } catch (error) {
        dispatch({
        type: WishlistActionTypes.WISHLIST_ADD_FAIL,
        payload: errorHandler(error),
        });
    }
    };
    



/**
 * Remove item from wishlist action creator
 * Actions related to removing an item from wishlist
 */
export const removeFromWishlist =
(id: string): AppThunk =>
async (dispatch, getState) => {
    dispatch({
    type: WishlistActionTypes.WISHLIST_REMOVE_ITEM,
    payload: id,
    });

    localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlistItems)
    );
}


