import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { productReducer } from "./reducers/productReducers";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  productReducer: productReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunk));
export default store;
