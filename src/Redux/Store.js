import { createStore } from "redux";
import reducers from './Reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducers );