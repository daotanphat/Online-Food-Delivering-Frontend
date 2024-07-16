import { GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE, GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST, GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS } from "./ActionType"

const initialValues = {
    ingredientItems: [],
    ingredientItem: null,
    error: null,
    loading: false,
}

export const ingredientItemReducer = (state = initialValues, action) => {
    switch (action.type) {
        case GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                ingredientItems: action.payload
            }
        case GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return initialValues;
    }
}