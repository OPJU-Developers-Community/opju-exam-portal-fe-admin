// lib
import axios from "axios";

// types
import { userManagementpayloadType } from "../slices/questionSetterSlice";

export const getQuestionSetterApi = (payload: userManagementpayloadType) => {
    // axios config
	let config = {
		params: {
			type: payload.type,
		},
	};

    return axios.get(`${process.env.NEXT_PUBLIC_DEV_URL}/admin/user-management`, config)
}