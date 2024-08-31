import { GET_PAYMENT_INFO_FAILURE, GET_PAYMENT_INFO_REQUEST, GET_PAYMENT_INFO_SUCCESS } from "./ActionType"

const initialValues = {
    payment_info: null,
    loading: false,
    error: null,
}

export const paymentReducer = (state = initialValues, action) => {
    switch (action.type) {
        case GET_PAYMENT_INFO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_PAYMENT_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                payment_info: action.payload,
            }
        case GET_PAYMENT_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}