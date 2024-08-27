import { api } from "../../Config/Api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_USER_FAILURE, GET_ORDER_BY_USER_REQUEST, GET_ORDER_BY_USER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionTypes"

export const createOrder = ({ requestOrder, jwt }) => async (dispatch) => {
    console.log("hello");
    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const response = await api.post(`/api/order`, requestOrder, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
    }
}

export const getOrderByUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_USER_REQUEST })
    try {
        const response = await api.get("/api/order/user", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        // setTimeout(() => {
        dispatch({ type: GET_ORDER_BY_USER_SUCCESS, payload: response.data })
        // }, 1000);
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ORDER_BY_USER_FAILURE, payload: error })
    }
}

export const updateOrderStatus = ({ orderId, status, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST })
    try {
        const response = await api.get(`/api/admin/order/${orderId}?status=${status}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log(response);

        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: response.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error })
    }
}