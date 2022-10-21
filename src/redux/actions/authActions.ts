import {
  PasswordUser,
  User,
  UserDeleteActionTypes,
  UserUpdateActionTypes,
  UserLoginActionTypes,
  UserRegisterActionTypes,
  UserDetailsActionTypes,
  UserUpdateProfileActionTypes,
} from "../../types/authTypes";
import axios from "axios";
import { AppThunk } from "../rootStore";
import { errorHandler } from "./errorHandler";
import { OrderListMyActionTypes } from "../../types/ordersTypes";
import { UserListActionTypes } from "../../types/authTypes";

export const login =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: UserLoginActionTypes.USER_LOGIN_REQUEST,
      });

      const { data } = await axios.post("/user/login", { email, password });
      dispatch({
        type: UserLoginActionTypes.USER_LOGIN_SUCCESS,
        payload: data["token"],
      });

      // Save user info to local storage
      localStorage.setItem("userInfo", JSON.stringify(data["token"]));
    } catch (error) {
      dispatch({
        type: UserLoginActionTypes.USER_LOGIN_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to log out a user
 */
export const logout = (): AppThunk => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userInfo}`,
      },
    };
    dispatch({
      type: UserLoginActionTypes.USER_LOGIN_SUCCESS,
      payload: null,
    });

    dispatch({ type: UserLoginActionTypes.USER_LOGOUT });
    dispatch({ type: UserDetailsActionTypes.USER_DETAILS_RESET });
    dispatch({ type: OrderListMyActionTypes.ORDER_LIST_MY_RESET });
    dispatch({ type: UserListActionTypes.USER_LIST_RESET });

    await axios.get("/user/logout", config);

    localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: UserLoginActionTypes.USER_LOGIN_FAILURE,
      payload: errorHandler(error),
    });
  } finally {
    localStorage.removeItem("userInfo");
  }
};

/**
 * Action used to register a user and immediately log in
 * the user after registration
 */
export const register =
  (name: string, email: string, password: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: UserRegisterActionTypes.USER_REGISTER_REQUEST,
      });

      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        { name, email, password },
        config
      );

      dispatch({
        type: UserRegisterActionTypes.USER_REGISTER_SUCCESS,
        payload: data,
      });

      // Log user in immediately after registration
      dispatch({
        type: UserLoginActionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });

      // Save user info to local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UserRegisterActionTypes.USER_REGISTER_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to get fetch a users details
 */
export const getUserDetails = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserDetailsActionTypes.USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userInfo}`,
      },
    };
    const { data } = await axios.get(`/user/me`, config);

    dispatch({
      type: UserDetailsActionTypes.USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: UserDetailsActionTypes.USER_DETAILS_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to get update user profile
 */
export const updateUserProfile =
  (user: PasswordUser): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.put(`/api/users/profile`, user, config);

      dispatch({
        type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: UserLoginActionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });

      // Store user info into local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UserUpdateProfileActionTypes.USER_UPDATE_PROFILE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to list all users
 */
export const listUsers = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserListActionTypes.USER_LIST_REQUEST,
    });

    // Get user info from the userLogin object (from getState)
    const {
      userLogin: { userInfo },
    } = getState();

    // Axios config
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: UserListActionTypes.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserListActionTypes.USER_LIST_FAILURE,
      payload: errorHandler(error),
    });
  }
};

/**
 * Action used to delete a user
 */
export const deleteUser =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UserDeleteActionTypes.USER_DELETE_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.delete(`/api/users/${id}`, config);

      dispatch({
        type: UserDeleteActionTypes.USER_DELETE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: UserDeleteActionTypes.USER_DELETE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };

/**
 * Action used to update  a user
 */
export const updateUser =
  (user: User): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UserUpdateActionTypes.USER_UPDATE_REQUEST,
      });

      // Get user info from the userLogin object (from getState)
      const {
        userLogin: { userInfo },
      } = getState();

      // Axios config
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.put(`/api/users/${user._id}`, user, config);

      dispatch({
        type: UserUpdateActionTypes.USER_UPDATE_SUCCESS,
      });

      // Dispatch the update user info
      dispatch({
        type: UserDetailsActionTypes.USER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserUpdateActionTypes.USER_UPDATE_FAILURE,
        payload: errorHandler(error),
      });
    }
  };
