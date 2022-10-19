import axios from "axios";
import { AppThunk } from "../rootStore";
import { Order } from "../../types/orderCreate";
import { errorHandler } from '../../types/errorHandler';

export const createOrder = (order: Order) : AppThunk => async (dispatch) => {
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
      payload: errorHandler
    });
  }
};

export const myOrders = () : AppThunk => async (dispatch) => {
  try {
    dispatch({ type: "MY_ORDERS_REQUEST" });

    const { data } = await axios.get(""); //Hardcodear datos

    dispatch({ type: "MY_ORDERS_SUCCESS", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "MY_ORDERS_FAIL",
      payload: errorHandler
    });
  }
};

export const getAllOrders = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: "ALL_ORDERS_REQUEST" });

    const { data } = await axios.get(""); //Harcodear datos

    dispatch({ type: "ALL_ORDERS_SUCCESS", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "ALL_ORDERS_FAIL",
      payload: errorHandler
    });
  }
};

export const updateOrder = (id: number, order: Order): AppThunk => async (dispatch) => {
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
      payload: errorHandler
    });
  }
};

export const deleteOrder = (id: number): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_ORDER_REQUEST" });

    const { data } = await axios.delete(``); //hardcodear datos

    dispatch({ type: "DELETE_ORDER_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "DELETE_ORDER_FAIL",
      payload: errorHandler
    });
  }
};

export const getOrderDetails = (id: number): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_DETAILS_REQUEST" });

    const { data } = await axios.get(``); //hardcodear datos

    dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data.order });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAIL",
      payload: errorHandler
    });
  }
};

export const clearErrors = (): AppThunk => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
