import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// apis
import { educationManagementApi } from "../apis/eductionManagementApi";
import { stateType } from "@/types/index.type";

export interface educationManagementpayloadType {
  params: {
    type: string | string[];
    page: number;
    limit: number;
  };
}

// thunk
export const getEducationManagement = createAsyncThunk(
  "createEducation",
  async (payload: educationManagementpayloadType, thunkAPI) => {
    try {
      const response = await educationManagementApi(payload);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        return thunkAPI.rejectWithValue(axiosError.response.data);
      }
    }
  }
);

const initialState: stateType = {
  data: null,
  apiStatus: "idle", // loading | success | failed
  message: "",
};

const educationManagementSlice = createSlice({
  name: "educationManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEducationManagement.pending, (state, action) => {
      state.apiStatus = "loading";
    });
    builder.addCase(getEducationManagement.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.apiStatus = "success";
      state.message = action.payload?.message;
    });
    builder.addCase(getEducationManagement.rejected, (state, action: any) => {
      state.apiStatus = "failed";
      state.data = null;
      state.message = action.payload?.message;
    });
  },
});

export default educationManagementSlice.reducer;
