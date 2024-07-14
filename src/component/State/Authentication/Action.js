import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios"
import { api, API_URL } from "../../Config/Api"

export const registerUser = (requestData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, requestData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "RESTAURANT_OWNER") {
            requestData.navigate("/admin/restaurant")
        } else {
            requestData.navigate("/")
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt })
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
        console.log("error", error);
    }
}

export const loginUser = (requestData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await api.post(`/login`, requestData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "RESTAURANT_OWNER") {
            requestData.navigate("/admin/restaurant")
        } else {
            requestData.navigate("/")
        }

        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
        console.log("error", error);
    }
}

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }

        })
        dispatch({ type: GET_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error })
        console.log("error", error);
    }
}

export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })
    try {
        const { data } = await api.put(`/api/user/restaurant/add-favorites/${restaurantId}`,
            { jwt, restaurantId }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }

        })
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error })
        console.log("error", error);
    }
}

export const logOut = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    try {
        console.log("out");
        localStorage.clear();
        dispatch({ type: LOGOUT })
    } catch (error) {
        console.log("error", error);
    }
}