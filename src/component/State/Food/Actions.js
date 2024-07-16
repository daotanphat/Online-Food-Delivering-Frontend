import { GET_FOOD_BY_RESTAURANT_ID_FAILURE, GET_FOOD_BY_RESTAURANT_ID_REQUEST, GET_FOOD_BY_RESTAURANT_ID_SUCCESS } from "./ActionTypes"
import { api } from "../../Config/Api"

export const getFoodByRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_FOOD_BY_RESTAURANT_ID_REQUEST })
    try {
        const response = await api.get(`/api/food/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_FOOD_BY_RESTAURANT_ID_SUCCESS, payload: response.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_FOOD_BY_RESTAURANT_ID_FAILURE, payload: error })
    }
}