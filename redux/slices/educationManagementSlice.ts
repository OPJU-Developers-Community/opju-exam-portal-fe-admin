import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// apis
import { createEducationApi } from "../apis/educationManagementApi";

export interface stateType {
    data: object | null,
    status: 'idle' | 'loading' | 'success' | 'failed',
    message: string
}

export interface educationManagementPayloadType {
    fieldData: object,
    subjects: string[],
    queryType: string
}

// thunk
export const createEducation = createAsyncThunk("createEducation",async (payload: educationManagementPayloadType, thunkAPI) => {
    try {
        const response = await createEducationApi(payload);
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

const educationManagementSlice = createSlice({
    name: "questionSetter",
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(createEducation.pending, (state, action) => {
    //         state.status = "loading";
    //     });
    //     builder.addCase(createEducation.fulfilled, (state, action) => {
    //         state.data = action.payload?.data;
    //         state.status = "success";
    //         state.message = action.payload?.message       
    //     });
    //     builder.addCase(createEducation.rejected, (state, action: any) => {
    //         state.status = "failed";
    //         state.data = null;
    //         state.message = action.payload?.message;            
    //     });
    // }
})

export default educationManagementSlice.reducer;