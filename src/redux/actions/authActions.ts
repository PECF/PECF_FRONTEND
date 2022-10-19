import { IAuthActions, IAuthState } from "../../types/authTypes";

export const loadUser = () => async (dispatch: any) => {
  try {
    dispatch({ type: IAuthActions.USER_LOADING });

    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: IAuthActions.USER_LOADED,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: IAuthActions.AUTH_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({ type: IAuthActions.LOGIN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/login",
        { email, password },
        config
      );

      dispatch({
        type: IAuthActions.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: IAuthActions.LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const register =
  (userData: IAuthState["user"]) => async (dispatch: any) => {
    try {
      dispatch({ type: IAuthActions.REGISTER_USER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/v1/register", userData, config);

      dispatch({
        type: IAuthActions.REGISTER_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: IAuthActions.REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const logout = () => async (dispatch: any) => {
  try {
    await axios.get("/api/v1/logout");

    dispatch({
      type: IAuthActions.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: IAuthActions.LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch: any) => {
  dispatch({
    type: IAuthActions.CLEAR_ERRORS,
  });
};

// import axios from "axios";

// // Login
// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: "LOGIN_REQUEST" });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.post(
//       `/api/v1/login`, //REEMPLAZAR RUTA!
//       { email, password },
//       config
//     );

//     dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
//   } catch (error) {
//     dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
//   }
// };

// // Register
// export const register = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: "REGISTER_USER_REQUEST" });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await axios.post(`/api/v1/register`, userData, config); //REEMPLAZAR RUTA!

//     dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
//   } catch (error) {
//     dispatch({
//       type: "REGISTER_USER_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Load User
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: "LOAD_USER_REQUEST" });

//     const { data } = await axios.get(`/api/v1/me`); //REEMPLAZAR RUTA!

//     dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
//   } catch (error) {
//     dispatch({ type: "LOAD_USER_FAIL", payload: error.response.data.message });
//   }
// };

// // Logout User
// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get(`/api/v1/logout`); //REEMPLAZAR RUTA!

//     dispatch({ type: "LOGOUT_SUCCESS" });
//   } catch (error) {
//     dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
//   }
// };

// // Update Profile
// export const updateProfile = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: "UPDATE_PROFILE_REQUEST" });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await axios.put(`/api/v1/me/update`, userData, config); //REEMPLAZAR RUTA!

//     dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: "UPDATE_PROFILE_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Update Password
// export const updatePassword = (passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: "UPDATE_PASSWORD_REQUEST" });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/password/update`, //REEMPLAZAR RUTA!
//       passwords,
//       config
//     );

//     dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: "UPDATE_PASSWORD_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Forgot Password
// export const forgotPassword = (email) => async (dispatch) => {
//   try {
//     dispatch({ type: "FORGOT_PASSWORD_REQUEST" });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.post(`/api/v1/password/forgot`, email, config); //REEMPLAZAR RUTA!

//     dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: data.message });
//   } catch (error) {
//     dispatch({
//       type: "FORGOT_PASSWORD_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Reset Password
// export const resetPassword = (token, passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: "RESET_PASSWORD_REQUEST" });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/password/reset/${token}`, //REEMPLAZAR RUTA!

//       passwords,
//       config
//     );

//     dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: "RESET_PASSWORD_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get All Users
// export const getAllUsers = () => async (dispatch) => {
//   try {
//     dispatch({ type: "ALL_USERS_REQUEST" });
//     const { data } = await axios.get(`/api/v1/admin/users`); //REEMPLAZAR RUTA

//     dispatch({ type: "ALL_USERS_SUCCESS", payload: data.users });
//   } catch (error) {
//     dispatch({ type: "ALL_USERS_FAIL", payload: error.response.data.message });
//   }
// };

// // get  User Details
// export const getUserDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "USER_DETAILS_REQUEST" });
//     const { data } = await axios.get(`/api/v1/admin/user/${id}`); //REEMPLAZAR RUTA

//     dispatch({ type: "USER_DETAILS_SUCCESS", payload: data.user });
//   } catch (error) {
//     dispatch({
//       type: "USER_DETAILS_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Update User
// export const updateUser = (id, userData) => async (dispatch) => {
//   try {
//     dispatch({ type: "UPDATE_USER_REQUEST" });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/admin/user/${id}`, //REEMPLAZAR RUTA
//       userData,
//       config
//     );

//     dispatch({ type: "UPDATE_USER_SUCCESS", payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: "UPDATE_USER_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete User
// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "DELETE_USER_REQUEST" });

//     const { data } = await axios.delete(`/api/v1/admin/user/${id}`); //REEMPLAZAR RUTA

//     dispatch({ type: "DELETE_USER_SUCCESS", payload: data });
//   } catch (error) {
//     dispatch({
//       type: "DELETE_USER_FAIL",
//       payload: error.response.data.message,
//     });
//   }
// };