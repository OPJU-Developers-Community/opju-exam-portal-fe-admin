import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// apis
import { getQuestionSetterApi } from "../apis/questionSetterApi";

// types
export interface userManagementpayloadType {
    type: string
}

export interface stateType {
    data: object | null,
    status: 'idle' | 'loading' | 'success' | 'failed',
    message: string
}

// thunk
export const getQuestionSetter = createAsyncThunk("getQuestionSetter",async (payload: userManagementpayloadType, thunkAPI) => {
    try {
        const response = await getQuestionSetterApi(payload);
        return response.data
    }catch(error) {
        const axiosError = error as AxiosError;

        if(axiosError.response) {
            return thunkAPI.rejectWithValue(axiosError.response.data);
        }
    }
})


const initialState: stateType = {
    data: null,
	status: "idle", // loading | success | failed
	message: "",
}

const questionSetterSlice = createSlice({
    name: "questionSetter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuestionSetter.pending, (state, action) => {
            state.status = "loading";
        });
        builder.addCase(getQuestionSetter.fulfilled, (state, action) => {
            state.data = action.payload?.data;
            state.status = "success";
            state.message = action.payload?.message       
        });
        builder.addCase(getQuestionSetter.rejected, (state, action: any) => {
            state.status = "failed";
            state.data = null;
            state.message = action.payload?.message;            
        });
    }
})

export default questionSetterSlice.reducer;