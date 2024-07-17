import { GET_FOOD_BY_RESTAURANT_ID_FAILURE, GET_FOOD_BY_RESTAURANT_ID_REQUEST, GET_FOOD_BY_RESTAURANT_ID_SUCCESS, GET_FOOD_BY_SEARCH_AND_FILTER_REQUEST } from "./ActionTypes"
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

export const getFoodByRestaurantAndFilter = ({ restaurantId, jwt, foodType }) => async (dispatch) => {
    dispatch({ type: GET_FOOD_BY_SEARCH_AND_FILTER_REQUEST })
    try {
        const type = foodType === 'vegeterian' ? true : false
        const response = await api.get(`/api/food/restaurant-filter/${restaurantId}?isVegetarian=${type}&isSeasonal=${!type}&categoryName=`, {
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