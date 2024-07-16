import { api } from "../../Config/Api";
import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_SEARCH_FAILURE, GET_RESTAURANT_BY_SEARCH_REQUEST, GET_RESTAURANT_BY_SEARCH_SUCCESS, GET_RESTAURANT_BY_USER_FAILURE, GET_RESTAURANT_BY_USER_REQUEST, GET_RESTAURANT_BY_USER_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionTypes";

export const createRestaurant = ({ requestData, jwt }) => async (dispatch) => {
    console.log("token-----", jwt);
    dispatch({ type: CREATE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.post("/api/admin/restaurants", requestData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
        console.log(error);
    }
}

export const updateRestaurant = ({ restaurantId, requestData, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST })
    try {
        const response = await api.put(`api/admin/restaurants/${restaurantId}`, requestData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error })
        console.log(error);
    }
}

export const deleteRestaurant = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST })
    try {
        await api.delete(`api/admin/restaurants/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId })
    } catch (error) {
        dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error })
        console.log(error);
    }
}

export const updateRestaurantStatus = ({ restaurantId, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST })
    try {
        const response = await api.put(`api/admin/restaurants/status/${restaurantId}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error })
        console.log(error);
    }
}

export const getRestaurantByUserId = (jwt) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_REQUEST })
    try {
        const { data } = await api.get("/api/admin/restaurants/user", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_RESTAURANT_BY_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_USER_FAILURE, payload: error })
        console.log(error);
    }
}

export const getAllRestaurant = (jwt) => async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANT_REQUEST })
    try {
        const { data } = await api.get("/api/user/restaurant", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error })
        console.log(error);
    }
}

export const getRestaurantById = ({ id, jwt }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST })
    try {
        const response = await api.get(`/api/user/restaurant/${id}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error })
        console.log(error);
    }
}

export const getRestaurantBySearch = ({ searchKey, jwt }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_SEARCH_REQUEST })
    try {
        const { data } = await api.get(`api/user/restaurant/search?search=${searchKey}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_RESTAURANT_BY_SEARCH_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_RESTAURANT_BY_SEARCH_FAILURE, payload: error })
        console.log(error);
    }
}

