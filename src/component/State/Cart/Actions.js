import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_BY_USER_ID_FAILURE, GET_CART_BY_USER_ID_REQUEST, GET_CART_BY_USER_ID_SUCCESS, REMOVE_CART_ITEM_FROM_CART_FAILURE, REMOVE_CART_ITEM_FROM_CART_REQUEST, REMOVE_CART_ITEM_FROM_CART_SUCCESS, UPDATE_CART_ITEM_QUANTITY_FAILURE, UPDATE_CART_ITEM_QUANTITY_REQUEST, UPDATE_CART_ITEM_QUANTITY_SUCCESS } from "./ActionTypes"
import { api } from "../../Config/Api"

export const addItemToCart = ({ requestCartItem, jwt }) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = await api.put("/api/cart/add", requestCartItem, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error })
    }
}

export const getCartByUserId = (jwt) => async (dispatch) => {
    dispatch({ type: GET_CART_BY_USER_ID_REQUEST })
    try {
        const response = await api.get(`/api/cart/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        // setTimeout(() => {
        dispatch({ type: GET_CART_BY_USER_ID_SUCCESS, payload: response.data })
        // }, 2000)
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_CART_BY_USER_ID_FAILURE, payload: error })
    }

}

export const updateCartItemQuantity = ({ cartItemId, quantity, jwt }) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_QUANTITY_REQUEST })
    try {
        const response = await api.put(`/api/cart/${cartItemId}?quantity=${quantity}`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        // setTimeout(() => {
        dispatch({ type: UPDATE_CART_ITEM_QUANTITY_SUCCESS, payload: response.data })
        // }, 2000);
    } catch (error) {
        console.log(error);
        dispatch({ type: UPDATE_CART_ITEM_QUANTITY_FAILURE, payload: error })
    }
}

export const removeCartItemFromCart = ({ cartItemId, jwt }) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_FROM_CART_REQUEST })
    try {
        await api.delete(`/api/cart/remove/${cartItemId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: REMOVE_CART_ITEM_FROM_CART_SUCCESS, payload: cartItemId })
    } catch (error) {
        console.log(error);
        dispatch({ type: REMOVE_CART_ITEM_FROM_CART_FAILURE, payload: error })
    }
}