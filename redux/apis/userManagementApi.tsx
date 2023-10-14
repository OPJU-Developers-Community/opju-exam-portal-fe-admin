import axios from "axios";
import apiInstance from "./instance";

// types
import { userManagementpayloadType } from "../slices/userManagementSlice";
import baseApi from "./instance";

export const userManagementApi = (payload: userManagementpayloadType) => {
  const { params } = payload;

  return baseApi({
    method: "GET",
    url: "/user-management",
    params,
  });
};
