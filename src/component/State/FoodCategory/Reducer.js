import { CREATE_FOOD_CATEGORY_FAILURE, CREATE_FOOD_CATEGORY_REQUEST, CREATE_FOOD_CATEGORY_SUCCESS, GET_FOOD_CATEGORY_BY_ID_FAILURE, GET_FOOD_CATEGORY_BY_ID_REQUEST, GET_FOOD_CATEGORY_BY_ID_SUCCESS, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_REQUEST, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_SUCCESS, GET_FOOD_CATEGORY_BY_SEARCH_FAILURE, GET_FOOD_CATEGORY_BY_SEARCH_REQUEST } from "./ActionTypes";

const initialState = {
    categories: [],
    category: null,
    loading: false,
    error: null,
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FOOD_CATEGORY_REQUEST:
        case GET_FOOD_CATEGORY_BY_ID_REQUEST:
        case GET_FOOD_CATEGORY_BY_RESTAURANT_ID_REQUEST:
        case GET_FOOD_CATEGORY_BY_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_FOOD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload]
            }
        case GET_FOOD_CATEGORY_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload
            }
        case GET_FOOD_CATEGORY_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case CREATE_FOOD_CATEGORY_FAILURE:
        case GET_FOOD_CATEGORY_BY_ID_FAILURE:
        case GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE:
        case GET_FOOD_CATEGORY_BY_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return initialState;
    }
}