import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware: any = [
    /*YOUR CUSTOM MIDDLEWARES HERE*/
];

export const store: any = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
