import axios from "axios";

export const baseURL = "http://127.0.0.1:5000/api/".replace(/\/$/, "")

const getApi = async () => {
    return axios.create({
        baseURL: baseURL
    });
};

export default getApi;