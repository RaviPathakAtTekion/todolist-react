
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import ArrayReducer from "./noteArray/ArrayReducder.js";

const store = createStore(ArrayReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
