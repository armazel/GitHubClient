import { combineReducers } from "redux";
import userReducer from "./User";

export const rootReducer: any = combineReducers({
    user: userReducer
})
