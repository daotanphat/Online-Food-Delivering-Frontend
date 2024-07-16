import { GET_FOOD_BY_RESTAURANT_ID_FAILURE, GET_FOOD_BY_RESTAURANT_ID_REQUEST, GET_FOOD_BY_RESTAURANT_ID_SUCCESS } from "./ActionTypes";

const initialState = {
    food: null,
    foods: [],
    loading: false,
    error: null
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD_BY_RESTAURANT_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_FOOD_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                foods: action.payload
            }
        case GET_FOOD_BY_RESTAURANT_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return initialState;
    }
}