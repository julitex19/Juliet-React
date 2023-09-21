import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';


const middleware = [thunk];
const setMiddleWare = (process.env.NODE_EVV = 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware));

export const store = createStore(()=>{}, setMiddleWare);
