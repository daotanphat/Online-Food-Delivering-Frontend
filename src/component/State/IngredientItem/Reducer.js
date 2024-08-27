import { GET_FOOD_CATEGORY_BY_RESTAURANT_ID_FAILURE, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_REQUEST, GET_FOOD_CATEGORY_BY_RESTAURANT_ID_SUCCESS } from "../FoodCategory/ActionTypes"
import { CREATE_INGREDIENT_BY_RESTAURANT_ID_FAILURE, CREATE_INGREDIENT_BY_RESTAURANT_ID_REQUEST, CREATE_INGREDIENT_BY_RESTAURANT_ID_SUCCESS, CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE, CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST, CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS, DELETE_INGREDIENT_BY_ID_FAILURE, DELETE_INGREDIENT_BY_ID_REQUEST, DELETE_INGREDIENT_BY_ID_SUCCESS, DELETE_INGREDIENT_CATEGORY_BY_ID_FAILURE, DELETE_INGREDIENT_CATEGORY_BY_ID_REQUEST, DELETE_INGREDIENT_CATEGORY_BY_ID_SUCCESS, GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE, GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST, GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS, GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE, GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST, GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS, GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_SUCCESS } from "./ActionType"

const initialValues = {
    ingredientItems: [],
    ingredientCategories: [],
    ingredientItem: null,
    error: null,
    loading: false,
}

export const ingredientItemReducer = (state = initialValues, action) => {
    switch (action.type) {
        case GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST:
        case GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST:
        case CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_REQUEST:
        case CREATE_INGREDIENT_BY_RESTAURANT_ID_REQUEST:
        case DELETE_INGREDIENT_BY_ID_REQUEST:
        case DELETE_INGREDIENT_CATEGORY_BY_ID_REQUEST:
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
        case GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredientItems: action.payload
            }
        case GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ingredientCategories: action.payload
            }
        case CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_SUCCESS:
        case CREATE_INGREDIENT_BY_RESTAURANT_ID_SUCCESS:
        case DELETE_INGREDIENT_BY_ID_SUCCESS:
        case DELETE_INGREDIENT_CATEGORY_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case DELETE_INGREDIENT_BY_ID_FAILURE:
        case DELETE_INGREDIENT_CATEGORY_BY_ID_FAILURE:
        case CREATE_INGREDIENT_BY_RESTAURANT_ID_FAILURE:
        case CREATE_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE:
        case GET_INGREDIENT_CATEGORY_BY_RESTAURANT_ID_FAILURE:
        case GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE:
        case GET_INGREDIENT_ITEMS_BY_RESTAURANT_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return initialValues;
    }
}