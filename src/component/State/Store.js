import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { categoryReducer } from "./FoodCategory/Reducer";
import { foodReducer } from "./Food/Reducer";
import { ingredientItemReducer } from "./IngredientItem/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { orderAdminReducer } from "../../AdminComponent/State/Order/Reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rooteReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    category: categoryReducer,
    food: foodReducer,
    ingredientItem: ingredientItemReducer,
    cart: cartReducer,
    order: orderReducer,
    orderAdmin: orderAdminReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;  // Reset the entire state to undefined
    }
    return rooteReducer(state, action);
};

const persitConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart', 'restaurant']
}

const persitedReducer = persistReducer(persitConfig, rootReducer);

export const store = legacy_createStore(persitedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)