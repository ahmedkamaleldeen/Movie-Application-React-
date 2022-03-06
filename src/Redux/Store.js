import { createStore,applyMiddleware } from "redux";
import reducers from '../Reducers/compinedReducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
// import {composeWithDevTools} from 'redux'

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)) );