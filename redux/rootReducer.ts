import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import questionSetterReducer from "./slices/questionSetterSlice";
import userManagementReducer from "./slices/userManagementSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    questionSetter: questionSetterReducer,
    userManagement: userManagementReducer
})

export default rootReducer