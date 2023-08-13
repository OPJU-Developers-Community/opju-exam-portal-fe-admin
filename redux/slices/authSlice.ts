import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// apis
import { signupApi } from "../apis/authApi";

// types
import { signupType } from "@/types/auth.type";


export interface userState {
    data: object | null,
    status: 'idle' | 'loading' | 'success' | 'failed',
    message: string
}

// thunk
export const signUp = createAsyncThunk(
    "signup",
    async (payload: signupType, thunkAPI) => {
        try {
            const response = await signupApi(payload) 
            return response.data
        }catch(error) {
            const axiosError = error as AxiosError;

            if(axiosError.response) {
                return thunkAPI.rejectWithValue(axiosError.response.data);
            }
        }
    }
)

const initialState: userState = {
    data: null,
	status: "idle", // loading | success | failed
	message: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state, _) => {
            state.data = null;
            state.status = 'idle';
            state.message = '';
            localStorage.removeItem("access_token")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {
            state.status = "loading";
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.data = action.payload?.data;
            state.status = "success";
            state.message = action.payload?.message
            localStorage.setItem("access_token", JSON.stringify(action.payload?.data?.token))           
        });
        builder.addCase(signUp.rejected, (state, action: any) => {
            state.status = "failed";
            state.data = null;
            state.message = action.payload?.message;            
        });
    },
})

export default authSlice.reducer;