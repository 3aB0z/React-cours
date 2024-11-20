import { combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./reducers/productReducers";

const reducers = combineReducers({
    productReducer: productReducer
})

const store = legacy_createStore(reducers);
export default store;
