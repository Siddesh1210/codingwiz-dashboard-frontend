import axios from "axios";

export async function useDeleteDetail(url, body) {
    try {
        const response = await axios.delete(url, { data: body });
        return response.data;
    } catch (error) {
        throw (error?.message || 'Something went wrong');
    } 
}