
// path: ./src/stores/reducers/productsReducer.ts
// create productsReducer with typescript, redux, react. All logic in function in other place, and not use switch case, use object



// export const userReducer = (state = { user: {} }, action) => {
//   const reducers = {
//     LOGIN_REQUEST: {
//       loading: true,
//       isAuthenticated: false,
//     },
//     LOGIN_SUCCESS: {
//       ...state,
//       loading: false,
//       isAuthenticated: true,
//       user: action.payload,
//     },
//     LOGIN_FAIL: {
//       ...state,
//       loading: false,
//       isAuthenticated: false,
//       user: null,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const registerReducer = (state = { user: {} }, action) => {
//   const reducers = {
//     REGISTER_USER_REQUEST: {
//       loading: true,
//       isAuthenticated: false,
//     },
//     REGISTER_USER_SUCCESS: {
//       ...state,
//       loading: false,
//       isAuthenticated: true,
//       user: action.payload,
//     },
//     REGISTER_USER_FAIL: {
//       ...state,
//       loading: false,
//       isAuthenticated: false,
//       user: null,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const loadUserReducer = (state = { user: {} }, action) => {
//   const reducers = {
//     LOAD_USER_REQUEST: {
//       loading: true,
//       isAuthenticated: false,
//     },
//     LOAD_USER_SUCCESS: {
//       ...state,
//       loading: false,
//       isAuthenticated: true,
//       user: action.payload,
//     },
//     LOAD_USER_FAIL: {
//       loading: false,
//       isAuthenticated: false,
//       user: null,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const logoutReducer = (state = { user: {} }, action) => {
//   const reducers = {
//     LOGOUT_SUCCESS: {
//       loading: false,
//       user: null,
//       isAuthenticated: false,
//     },
//     LOGOUT_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const profileReducer = (state = {}, action) => {
//   const reducers = {
//     UPDATE_PROFILE_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     UPDATE_PROFILE_SUCCESS: {
//       ...state,
//       loading: false,
//       isUpdated: action.payload,
//     },
//     UPDATE_PROFILE_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const updatePasswordReducer = (state = {}, action) => {
//   const reducers = {
//     UPDATE_PASSWORD_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     UPDATE_PASSWORD_SUCCESS: {
//       ...state,
//       loading: false,
//       isUpdated: action.payload,
//     },
//     UPDATE_PASSWORD_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const forgotPasswordReducer = (state = {}, action) => {
//   const reducers = {
//     FORGOT_PASSWORD_REQUEST: {
//       ...state,
//       loading: true,
//       error: null,
//     },
//     FORGOT_PASSWORD_SUCCESS: {
//       ...state,
//       loading: false,
//       message: action.payload,
//     },
//     FORGOT_PASSWORD_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const resetPasswordReducer = (state = {}, action) => {
//   const reducers = {
//     RESET_PASSWORD_REQUEST: {
//       ...state,
//       loading: true,
//       error: null,
//     },
//     RESET_PASSWORD_SUCCESS: {
//       ...state,
//       loading: false,
//       success: action.payload,
//     },
//     RESET_PASSWORD_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const allUsersReducer = (state = { users: [] }, action) => {
//   const reducers = {
//     ALL_USERS_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     ALL_USERS_SUCCESS: {
//       ...state,
//       loading: false,
//       users: action.payload,
//     },
//     ALL_USERS_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const userDetailsReducer = (state = { user: {} }, action) => {
//   const reducers = {
//     USER_DETAILS_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     USER_DETAILS_SUCCESS: {
//       ...state,
//       loading: false,
//       user: action.payload,
//     },
//     USER_DETAILS_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const updateUserReducer = (state = { user: {} }, action) => {
//   const reducers = {
//     UPDATE_USER_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     UPDATE_USER_SUCCESS: {
//       ...state,
//       loading: false,
//       isUpdated: action.payload,
//     },
//     UPDATE_USER_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// export const deleteUserReducer = (state = {}, action) => {
//   const reducers = {
//     DELETE_USER_REQUEST: {
//       ...state,
//       loading: true,
//     },
//     DELETE_USER_SUCCESS: {
//       ...state,
//       loading: false,
//       isDeleted: action.payload.success,
//       message: action.payload.message,
//     },
//     DELETE_USER_FAIL: {
//       ...state,
//       loading: false,
//       error: action.payload,
//     },
//     CLEAR_ERRORS: {
//       ...state,
//       error: null,
//     },
//   };
//   return reducers[action.type] || { ...state };
// };

// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };
