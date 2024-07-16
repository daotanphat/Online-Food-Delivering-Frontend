import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { categoryReducer } from "./FoodCategory/Reducer";
import { foodReducer } from "./Food/Reducer";
import { ingredientItemReducer } from "./IngredientItem/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rooteReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    category: categoryReducer,
    food: foodReducer,
    ingredientItem: ingredientItemReducer,
    cart: cartReducer,
    order: orderReducer
})

export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk))