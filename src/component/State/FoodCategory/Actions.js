import { api } from "../../Config/Api";
import { CREATE_FOOD_CATEGORY_FAILURE, CREATE_FOOD_CATEGORY_REQUEST, CREATE_FOOD_CATEGORY_SUCCESS, DELETE_FOOD_CATEGORY_BY_ID_FAILURE, DELETE_FOOD_CATEGORY_BY_ID_REQUEST, DELETE_FOOD_CATEGORY_BY_ID_SUCCESS, GET_FOOD_CATEGORY_BY_ID_FAILURE, GET_FOOD_CATEGORY_BY_ID_REQUEST, GET_FOOD_CATEGORY_BY_ID_SUCCESS, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_REQUEST, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_SUCCESS, GET_FOOD_CATEGORY_BY_SEARCH_FAILURE, GET_FOOD_CATEGORY_BY_SEARCH_REQUEST, GET_FOOD_CATEGORY_BY_SEARCH_SUCCESS } from "./ActionTypes";

export const createFoodCategory = ({ foodCategoryData, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_FOOD_CATEGORY_REQUEST })
    try {
        const response = await api.post("/api/admin/category", foodCategoryData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_FOOD_CATEGORY_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: CREATE_FOOD_CATEGORY_FAILURE, payload: error })
        console.log(error);
    }
}

export const getFoodCategoryById = ({ foodCategoryId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_FOOD_CATEGORY_BY_ID_REQUEST })
    try {
        const response = await api.get(`/api/category/${foodCategoryId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_FOOD_CATEGORY_BY_ID_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: GET_FOOD_CATEGORY_BY_ID_FAILURE, payload: error })
        console.log(error);
    }
}

export const getFoodCategoryByRestaurantId = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_FOOD_CATEGORY_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/category/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_FOOD_CATEGORY_BY_RESTAURANT_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE, payload: error })
        console.log(error);
    }
}

export const getFoodCategoryBySearch = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_FOOD_CATEGORY_BY_SEARCH_REQUEST })
    try {
        const response = await api.get(`/api/category/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_FOOD_CATEGORY_BY_SEARCH_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: GET_FOOD_CATEGORY_BY_SEARCH_FAILURE, payload: error })
        console.log(error);
    }
}

export const deleteFoodCategoryById = ({ foodCategoryId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_FOOD_CATEGORY_BY_ID_REQUEST })
    try {
        const response = await api.get(`/api/admin/category/${foodCategoryId}/delete`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_FOOD_CATEGORY_BY_ID_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: DELETE_FOOD_CATEGORY_BY_ID_FAILURE, payload: error })
        console.log(error);
    }
}

export const updateFoodCategoryById = ({ foodCategoryId, foodCategoryData, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_FOOD_CATEGORY_BY_ID_REQUEST })
    try {
        const response = await api.post(`/api/admin/category/${foodCategoryId}/update`, foodCategoryData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_FOOD_CATEGORY_BY_ID_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: DELETE_FOOD_CATEGORY_BY_ID_FAILURE, payload: error })
        console.log(error);
    }
}