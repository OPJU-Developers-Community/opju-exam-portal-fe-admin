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

    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/user-management`, config)
}