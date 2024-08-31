import { GET_PAYMENT_INFO_FAILURE, GET_PAYMENT_INFO_REQUEST, GET_PAYMENT_INFO_SUCCESS } from "./ActionType";
import { api } from "../../Config/Api"

export const getPaymentInfo = ({ jwt, amount, bankCode, order, responseCode }) => async (dispatch) => {
    dispatch({ type: GET_PAYMENT_INFO_REQUEST })
    try {
        const response = await api.get(`/api/payment/payment_info?vnp_Amount=${amount}&vnp_BankCode=${bankCode}&vnp_OrderInfo=${order}&vnp_ResponseCode=${responseCode}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log(response);
        dispatch({ type: GET_PAYMENT_INFO_SUCCESS, payload: response.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_PAYMENT_INFO_FAILURE, payload: error })
    }
}