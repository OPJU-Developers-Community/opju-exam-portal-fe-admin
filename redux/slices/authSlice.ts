import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// apis
import { loginApi, signupApi } from "../apis/authApi";

// types
import { loginType, signupType } from "@/types/auth.type";

export interface userState {
  data: object | null;
  status: "idle" | "loading" | "success" | "failed";
  message: string;
}

// thunk
export const signUp = createAsyncThunk(
  "signUp",
  async (payload: signupType, thunkAPI) => {
    const response = await signupApi(payload);

    if (response.error) return thunkAPI.rejectWithValue(response);

    return response;
  }
);

export const login = createAsyncThunk(
  "login",
  async (payload: loginType, thunkApi) => {
    const response = await loginApi(payload);

    if (response.error) return thunkApi.rejectWithValue(response);

    return response;
  }
);

const initialState: userState = {
  data: null,
  status: "idle", // loading | success | failed
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
      state.status = "idle";
      state.message = "";
      localStorage.removeItem("access_token");
      localStorage.removeItem("username");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.status = "success";
      state.message = action.payload?.message;
      localStorage.setItem(
        "access_token",
        JSON.stringify(action.payload?.data?.token)
      );
      localStorage.setItem("username", JSON.stringify(action.payload?.data?.name))
    });
    builder.addCase(signUp.rejected, (state, action: any) => {
      state.status = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });

    // login builder
    builder.addCase(login.pending, (state, action: any) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action:any) => {
      state.data = action.payload?.data;
      state.status = "success";
      state.message = action.payload?.message;
      localStorage.setItem(
        "access_token",
        JSON.stringify(action.payload?.data?.token)
      );
      localStorage.setItem("username", JSON.stringify(action.payload?.data?.name))
    });
    builder.addCase(login.rejected, (state, action: any) => {
      state.status = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
