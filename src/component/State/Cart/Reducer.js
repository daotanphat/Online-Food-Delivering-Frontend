import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_BY_USER_ID_FAILURE, GET_CART_BY_USER_ID_REQUEST, GET_CART_BY_USER_ID_SUCCESS, REMOVE_CART_ITEM_FROM_CART_FAILURE, REMOVE_CART_ITEM_FROM_CART_REQUEST, REMOVE_CART_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_QUANTITY_FAILURE, UPDATE_CART_ITEM_QUANTITY_REQUEST, UPDATE_CART_ITEM_QUANTITY_SUCCESS } from "./ActionTypes"

const initialValues = {
    cart: null,
    cartItem: null,
    cartItems: [],
    loading: false,
    error: null
}

export const cartReducer = (state = initialValues, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
        case GET_CART_BY_USER_ID_REQUEST:
        case UPDATE_CART_ITEM_QUANTITY_REQUEST:
        case REMOVE_CART_ITEM_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                loading: false
            }
        case GET_CART_BY_USER_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                cartItems: action.payload.cartItems,
                error: null
            }
        case UPDATE_CART_ITEM_QUANTITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cartItems: state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item)
            }
        case REMOVE_CART_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }
        case ADD_ITEM_TO_CART_FAILURE:
        case GET_CART_BY_USER_ID_FAILURE:
        case UPDATE_CART_ITEM_QUANTITY_FAILURE:
        case REMOVE_CART_ITEM_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}