import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import questionSetterReducer from "./slices/questionSetterSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    questionSetter: questionSetterReducer
})

export default rootReducer