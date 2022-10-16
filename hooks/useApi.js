import axios from "axios";
export const baseUrl = 'http://localhost:5000';


export async function fetchApi(endPond) {

    try {
        const { data } = await axios.get(`${baseUrl}/${endPond}`);
        return data
    } catch (error) {
        throw error.message
    }
}


export async function deleteApi(endPond) {
    try {
        const { data } = await axios.delete(`${baseUrl}/${endPond}`);
        return data
    } catch (error) {
        throw error.message
    }

}

export async function postApi(endPond, data) {
    try {
        const res = await axios.post(`${baseUrl}/${endPond}`, data);
        return res.data
    } catch (error) {
        throw error.message
    }

}

export async function putApi(endPond, data) {
    try {
        const res = await axios.put(`${baseUrl}/${endPond}`, data);
        return res.data
    } catch (error) {
        throw error.message
    }

}


