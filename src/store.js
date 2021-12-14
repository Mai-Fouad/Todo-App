import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer";
import { print1, print2, print3 } from './exampleAddons/middleware';


const composeEnhancer = composeWithDevTools(
    applyMiddleware(print1,print2,print3)
)
const store = createStore(rootReducer,composeEnhancer);

export default store;