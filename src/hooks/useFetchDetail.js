import axios from "axios";

export async function useFetchDetail(url) {
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        throw (error?.response?.data?.message || error?.message || 'Something went wrong');
    } 
}