import { CREATE_FOOD_FAILURE, CREATE_FOOD_REQUEST, CREATE_FOOD_SUCCESS, DELETE_FOOD_FAILURE, DELETE_FOOD_REQUEST, DELETE_FOOD_SUCCESS, GET_FOOD_BY_RESTAURANT_ID_FAILURE, GET_FOOD_BY_RESTAURANT_ID_REQUEST, GET_FOOD_BY_RESTAURANT_ID_SUCCESS, GET_FOOD_BY_SEARCH_AND_FILTER_REQUEST } from "./ActionTypes"
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

export const createFood = ({ requestData, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_FOOD_REQUEST })
    try {
        await api.post(`/api/admin/food`, requestData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_FOOD_SUCCESS })
    } catch (error) {
        console.log(error);
        dispatch({ type: CREATE_FOOD_FAILURE, payload: error })
    }
}

export const deleteFood = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_FOOD_REQUEST })
    try {
        await api.delete(`/api/admin/food/${foodId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_FOOD_SUCCESS })
    } catch (error) {
        console.log(error);
        dispatch({ type: DELETE_FOOD_FAILURE, payload: error })
    }
}