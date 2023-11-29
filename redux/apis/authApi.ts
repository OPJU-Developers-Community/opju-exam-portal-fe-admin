// lib
import axios from "axios";
import { AxiosError } from "axios";

// types
import { loginType, signupType } from "@/types/auth.type";
import { defaultErrorMessage } from "@/utils/constants";

export const signupApi = async (payload: signupType) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_URL}/signup`,
      payload
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const { data }: any = axiosError.response;

    return { error: true, message: data.message || defaultErrorMessage };
  }
};

export const loginApi = async (payload: loginType) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_URL}/login`,
      payload
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const { data }: any = axiosError.response;

    return { error: true, message: data.message || defaultErrorMessage };
  }
};
