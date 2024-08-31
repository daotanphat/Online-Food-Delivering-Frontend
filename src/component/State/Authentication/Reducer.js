import { ADD_FAVORITE_ADDRESS_FAILURE, ADD_FAVORITE_ADDRESS_REQUEST, ADD_FAVORITE_ADDRESS_SUCCESS, ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { isPresentInfavorites } from "../../Config/Logic"

const initialState = {
    user: null,
    isLoading: null,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
        case ADD_FAVORITE_ADDRESS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                success: null
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jwt: action.payload,
                success: "Register success"
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                favorites: action.payload.favorites,
                error: null
            }
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInfavorites(state.favorites, action.payload)
                    ? state.favorites.filter((item) => item.id !== action.payload.id)
                    : [action.payload, ...state.favorites]
            }
        case ADD_FAVORITE_ADDRESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                user: action.payload,
            }
        case ADD_FAVORITE_ADDRESS_FAILURE:
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                success: null
            }
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}