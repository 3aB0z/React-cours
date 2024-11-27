import { combineReducers, legacy_createStore, applyMiddleware, compose } from "redux";
import { productReducer } from "./reducers/productReducers";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  productReducer: productReducer,
});

// const store = legacy_createStore(reducers, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
