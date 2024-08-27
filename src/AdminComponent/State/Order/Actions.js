import { api } from "../../../component/Config/Api"
import { GET_ORDER_BY_RESTAURANT_FAILURE, GET_ORDER_BY_RESTAURANT_REQUEST, GET_ORDER_BY_RESTAURANT_SUCCESS } from "./ActionTypes"

export const getOrderByRestaurant = ({ restaurantId, status, jwt }) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_RESTAURANT_REQUEST })
    try {
        const { data } = await api.get(`/api/admin/order/restaurant/${restaurantId}/${status}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_ORDER_BY_RESTAURANT_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: GET_ORDER_BY_RESTAURANT_FAILURE, payload: error })
    }
}