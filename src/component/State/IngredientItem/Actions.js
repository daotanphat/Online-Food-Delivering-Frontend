import { GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE, GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST, GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS } from "./ActionType"
import { api } from "../../Config/Api"

export const getIngredientItemsByFood = ({ foodId, jwt }) => async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_ITEMS_BY_FOOD_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/ingredient/item/food/${foodId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        dispatch({ type: GET_INGREDIENT_ITEMS_BY_FOOD_ID_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_INGREDIENT_ITEMS_BY_FOOD_ID_FAILURE, payload: error })
    }
}