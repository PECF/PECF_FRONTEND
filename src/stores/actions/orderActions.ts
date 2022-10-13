import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_ORDER_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("", order, config); // FALTA RUTA!

    dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "MY_ORDERS_REQUEST" });

    const { data } = await axios.get(""); //Hardcodear datos

    dispatch({ type: "MY_ORDERS_SUCCESS", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "MY_ORDERS_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_ORDERS_REQUEST" });

    const { data } = await axios.get(""); //Harcodear datos

    dispatch({ type: "ALL_ORDERS_SUCCESS", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "ALL_ORDERS_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_ORDER_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      ``, //Hardcodear datos
      order,
      config
    );

    dispatch({ type: "UPDATE_ORDER_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_ORDER_REQUEST" });

    const { data } = await axios.delete(``); //hardcodear datos

    dispatch({ type: "DELETE_ORDER_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "DELETE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_DETAILS_REQUEST" });

    const { data } = await axios.get(``); //hardcodear datos

    dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data.order });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
