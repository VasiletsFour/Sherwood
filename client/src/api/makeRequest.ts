import {AxiosRequestConfig} from "axios";
import getApi from "./api";

export const makeGetRequest = async (url: string, options?: AxiosRequestConfig) => {
    try {
        const api = await getApi();

        return await api.get(url, {...options});
    } catch (err) {
        return err.response;
    }
}