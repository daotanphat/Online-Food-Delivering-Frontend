import { GET_ORDER_BY_RESTAURANT_FAILURE, GET_ORDER_BY_RESTAURANT_REQUEST, GET_ORDER_BY_RESTAURANT_SUCCESS } from "./ActionTypes"

const initialValues = {
    orders: [],
    loading: false,
    error: null
}

export const orderAdminReducer = (state = initialValues, action) => {
    switch (action.type) {
        case GET_ORDER_BY_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ORDER_BY_RESTAURANT_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: null
            }
        case GET_ORDER_BY_RESTAURANT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}