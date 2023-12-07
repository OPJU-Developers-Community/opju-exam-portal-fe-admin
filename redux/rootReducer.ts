import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import questionSetterReducer from "./slices/questionSetterSlice";
import userManagementReducer from "./slices/userManagementSlice";
import educationManagementReducer from "./slices/educationManagementSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    questionSetter: questionSetterReducer,
    userManagement: userManagementReducer,
    educationManagement: educationManagementReducer
})

export default rootReducer