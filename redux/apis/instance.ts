import axios from "axios";


const apiInstance = () => {
    
    const access_token = localStorage.getItem("access_token");

    if(access_token !== null) {
       const parsedToken = JSON.parse(access_token);
        
        return axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_DEV_URL}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${parsedToken}`
            }
        })

    }else {
        throw new Error("No token present...");
    }

}

const baseApi = (options: any) => {
    const api = apiInstance();

    return api({
        ...options
    })
}

export default baseApi;