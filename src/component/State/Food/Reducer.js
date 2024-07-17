import { GET_FOOD_BY_RESTAURANT_ID_FAILURE, GET_FOOD_BY_RESTAURANT_ID_REQUEST, GET_FOOD_BY_RESTAURANT_ID_SUCCESS, GET_FOOD_BY_SEARCH_AND_FILTER_FAILURE, GET_FOOD_BY_SEARCH_AND_FILTER_REQUEST, GET_FOOD_BY_SEARCH_AND_FILTER_SUCCESS } from "./ActionTypes";

const initialState = {
    food: null,
    foods: [],
    loading: false,
    error: null
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD_BY_RESTAURANT_ID_REQUEST:
        case GET_FOOD_BY_SEARCH_AND_FILTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_FOOD_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                foods: action.payload
            }
        case GET_FOOD_BY_SEARCH_AND_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                foods: action.payload
            }
        case GET_FOOD_BY_RESTAURANT_ID_FAILURE:
        case GET_FOOD_BY_SEARCH_AND_FILTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return initialState;
    }
}