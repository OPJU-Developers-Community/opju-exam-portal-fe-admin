// lib
import axios from "axios";

// types
import { loginType, signupType } from "@/types/auth.type";


export const signupApi = (payload: signupType) => {
    return axios.post(`${process.env.NEXT_PUBLIC_DEV_URL}/admin/signup`, payload)
}

export const loginApi = (payload: loginType) => {
    return axios.post(`${process.env.NEXT_PUBLIC_DEV_URL}/admin/login`, payload)
}