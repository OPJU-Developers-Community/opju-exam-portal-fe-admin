// lib
import axios from "axios";

// types
import { educationManagementPayloadType } from "../slices/educationManagementSlice";

export const createEducationApi = (payload: educationManagementPayloadType) => {
    const newPayload = {
        ...payload.fieldData,
        subjects: payload.subjects
    }
    
    return axios.post(`${process.env.NEXT_PUBLIC_URL}/admin/education-management?type=${payload.queryType}`, newPayload)
}