import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_USER_FAILURE, GET_ORDER_BY_USER_REQUEST, GET_ORDER_BY_USER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionTypes"

const initialValues = {
    order: null,
    items: [],
    loading: false,
    error: null
}

export const orderReducer = (state = initialValues, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
        case GET_ORDER_BY_USER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
                error: null
            }
        case GET_ORDER_BY_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
                error: null
            }
        case UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case CREATE_ORDER_FAILURE:
        case GET_ORDER_BY_USER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state
    }
}