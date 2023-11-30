import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// apis
import { educationManageMentApi } from "../apis/educationManagementApi";

// types & interfaces
import { stateType } from "@/types/index.type"

export interface educationManagementPayloadType {
  params: {
    type: string | string[];
  };
}

const initialState: stateType = {
  data: null,
  apiStatus: "idle", // loading | success | failed
  message: "",
};

// thunk
export const getEducationManagement = createAsyncThunk(
  "getEducationManagement",
  async (payload: educationManagementPayloadType, thunkAPI) => {
    try {
      const response = await educationManageMentApi(payload);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        return thunkAPI.rejectWithValue(axiosError.response.data);
      }
    }
  }
);

const educationManagementSlice = createSlice({
  name: "educationManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEducationManagement.pending, (state, _) => {
      state.apiStatus = "loading";
    });
    builder.addCase(getEducationManagement.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.apiStatus = "success";
      state.message = action.payload?.message;
    });
    builder.addCase(getEducationManagement.rejected, (state, action: any) => {
      state.apiStatus= "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
});

export default educationManagementSlice.reducer;
