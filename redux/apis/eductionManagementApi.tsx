// types
import { educationManagementpayloadType } from "../slices/educationManagementSlice";
import baseApi from "./instance";

export const educationManagementApi = (
  payload: educationManagementpayloadType
) => {
  const { params } = payload;

  return baseApi({
    method: "GET",
    url: "/get-education-list",
    params,
  });
};
