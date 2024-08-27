import { CREATE_INGREDIENT_BY_RESTAURANT_ID_FAILURE, CREATE_INGREDIENT_BY_RESTAURANT_ID_REQUEST, CREATE_INGREDIENT_BY_RESTAURANT_ID_SUCCESS, CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE, CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST, CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS, DELETE_INGREDIENT_BY_ID_FAILURE, DELETE_INGREDIENT_BY_ID_REQUEST, DELETE_INGREDIENT_BY_ID_SUCCESS, DELETE_INGREDIENT_CATEGORY_BY_ID_FAILURE, DELETE_INGREDIENT_CATEGORY_BY_ID_REQUEST, DELETE_INGREDIENT_CATEGORY_BY_ID_SUCCESS, GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE, GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST, GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS, GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE, GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST, GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS, GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_SUCCESS } from "./ActionType"
import { api } from "../../Config/Api"
import { GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE } from "../FoodCategory/ActionTypes"

export const getIngredientItemsByFood = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/ingredient/item/food/${foodId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        dispatch({ type: GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE, payload: error })
    }
}

export const getIngredientItemsByRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/ingredient/item/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE, payload: error })

    }
}

export const getIngredientCategoriesByRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/ingredient/category/restaurant/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE, payload: error })
    }
}

export const createIngredientByRestaurant = ({ requestData, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.post(`/api/admin/ingredient/item`, requestData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_INGREDIENT_BY_RESTAURANT_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_INGREDIENT_BY_RESTAURANT_ID_FAILURE, payload: error })
    }
}

export const createIngredientCategoryByRestaurant = ({ requestData, jwt }) => async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.post(`/api/admin/ingredient/category`, requestData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE, payload: error })
    }
}

export const deleteIngredientById = ({ ingredientId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_INGREDIENT_BY_ID_REQUEST })
    try {
        await api.get(`/api/admin/ingredient/${ingredientId}/delete`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_INGREDIENT_BY_ID_SUCCESS})
    } catch (error) {
        dispatch({ type: DELETE_INGREDIENT_BY_ID_FAILURE, payload: error })
    }
}

export const deleteIngredientCategoryById = ({ ingredientCategoryId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_INGREDIENT_CATEGORY_BY_ID_REQUEST })
    try {
        await api.get(`/api/admin/ingredient/category/${ingredientCategoryId}/delete`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_INGREDIENT_CATEGORY_BY_ID_SUCCESS})
    } catch (error) {
        dispatch({ type: DELETE_INGREDIENT_CATEGORY_BY_ID_FAILURE, payload: error })
    }
}