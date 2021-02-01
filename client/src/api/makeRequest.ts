import {AxiosRequestConfig, AxiosResponse} from "axios";
import getApi from "./api";
import {getToken} from "../utils/storage";

export const makeGetRequest = async (url: string, options?: AxiosRequestConfig) => {
    try {
        const api = await getApi();

        return await api.get(url, {
            headers: {
                Authorization: `Bearer ${getToken()?.auth || ""}`,
                // RefreshToken: `Bearer ${getToken()?.ref || ""}`
            },
            ...options,
        });
    } catch (err) {
        return err.response
    }

};

export const makePostRequest = async <TRequest, TResponse>(url: string, data: TRequest, options: AxiosRequestConfig = {}) => {
    try {
        const api = await getApi();

        return await api.post<TRequest, AxiosResponse<TResponse>>(url, data, {...(options.headers || {}),});
    } catch (err) {
        return err.response;
    }
}

export const makePutRequest = async <TRequest, TResponse>(url: string, data: TRequest, options: AxiosRequestConfig = {}) => {
    try {
        const api = await getApi();

        return await api.put<TRequest, AxiosResponse<TResponse>>(url, {...(options.headers || {}),});
    } catch (err) {
        return err.response;
    }
}