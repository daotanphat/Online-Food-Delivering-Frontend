import { api } from "../../Config/Api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_USER_FAILURE, GET_ORDER_BY_USER_REQUEST, GET_ORDER_BY_USER_SUCCESS } from "./ActionTypes"

export const createOrder = ({ requestOrder, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const response = await api.post(`/api/order`, { requestOrder }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log(response);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
    }
}

export const getOrderByUser = (jwt) => async(dispatch) => {
    dispatch({type: GET_ORDER_BY_USER_REQUEST})
    try {
        const response = await api.get("/api/order/user", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        // setTimeout(() => {
            dispatch({type: GET_ORDER_BY_USER_SUCCESS, payload: response.data})
        // }, 1000);
    } catch (error) {
        console.log(error);
        dispatch({type: GET_ORDER_BY_USER_FAILURE, payload: error})
    }
}