// lib
import axios from "axios";

// types
import { educationManagementPayloadType } from "../slices/educationManagementSlice";
import baseApi from "./instance";

export const educationManageMentApi = (
  payload: educationManagementPayloadType
) => {
  const { params } = payload;

  return baseApi({
    method: "GET",
    url: "/education-management",
    params,
  });
};
