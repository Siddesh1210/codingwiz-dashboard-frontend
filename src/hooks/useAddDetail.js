import axios from "axios";

export async function useAddDetail(url, body) {
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw (error?.message || 'Something went wrong');
    } 
}