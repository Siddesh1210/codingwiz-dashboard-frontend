import axios from "axios";

export async function useUpdateDetail(url, data) {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        throw (error?.response?.data?.message || "Something went wrong");
    }
}
