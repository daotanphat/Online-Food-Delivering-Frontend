import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_SEARCH_FAILURE, GET_RESTAURANT_BY_SEARCH_REQUEST, GET_RESTAURANT_BY_SEARCH_SUCCESS, GET_RESTAURANT_BY_USER_FAILURE, GET_RESTAURANT_BY_USER_REQUEST, GET_RESTAURANT_BY_USER_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionTypes";

const initialState = {
    restaurants: [],
    userRestaurant: null,
    restaurant: null,
    loading: false,
    error: null
}

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_RESTAURANT_REQUEST:
        case UPDATE_RESTAURANT_REQUEST:
        case DELETE_RESTAURANT_REQUEST:
        case UPDATE_RESTAURANT_STATUS_REQUEST:
        case GET_ALL_RESTAURANT_REQUEST:
        case GET_RESTAURANT_BY_ID_REQUEST:
        case GET_RESTAURANT_BY_USER_REQUEST:
        case GET_RESTAURANT_BY_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                userRestaurant: action.payload
            }
        case DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: state.restaurants.filter(
                    (restaurant) => restaurant.id !== action.payload
                ),
                userRestaurant: state.userRestaurant.filter(
                    (restaurant) => restaurant.id !== action.payload
                )
            }
        case UPDATE_RESTAURANT_SUCCESS:
        case UPDATE_RESTAURANT_STATUS_SUCCESS:
        case GET_RESTAURANT_BY_USER_SUCCESS:
        case GET_RESTAURANT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload,
                error: null
            }
        case GET_ALL_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            }
        case GET_RESTAURANT_BY_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            }
        case CREATE_RESTAURANT_FAILURE:
        case UPDATE_RESTAURANT_STATUS_FAILURE:
        case DELETE_RESTAURANT_FAILURE:
        case UPDATE_RESTAURANT_STATUS_FAILURE:
        case GET_ALL_RESTAURANT_FAILURE:
        case GET_RESTAURANT_BY_ID_FAILURE:
        case GET_RESTAURANT_BY_USER_FAILURE:
        case GET_RESTAURANT_BY_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}