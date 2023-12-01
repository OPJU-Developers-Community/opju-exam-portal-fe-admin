// libs
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import  { AxiosError } from "axios"

// apis
import { userManagementApi } from "../apis/userManagementApi"

// types & interfaces
import { stateType } from "@/types/index.type"

export interface userManagementpayloadType {
    params: {
        type: string | string[],
        page: number,
        limit: number
    }
}

const initialState: stateType = {
    data: null,
	apiStatus: "idle", // loading | success | failed
	message: "",
}

// thunk
export const getUserManagement = createAsyncThunk("getUserManagement", async(payload: userManagementpayloadType, thunkAPI)=> {
    try {

        const response = await userManagementApi(payload);
        return response.data

    }catch(error){
        const axiosError = error as AxiosError

        if(axiosError.response) {
            return thunkAPI.rejectWithValue(axiosError.response.data)
        }
    }
})

const userManagementSlice = createSlice({
    name: "userManagement",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserManagement.pending, (state, _) => {
            state.apiStatus = "loading";
        });
        builder.addCase(getUserManagement.fulfilled, (state, action) => {
            state.data = action.payload?.data;
            state.apiStatus = "success";
            state.message = action.payload?.message       
        });
        builder.addCase(getUserManagement.rejected, (state, action: any) => {
            state.apiStatus = "failed";
            state.data = null;
            state.message = action.payload?.message;            
        });
    }
})

export default userManagementSlice.reducer;