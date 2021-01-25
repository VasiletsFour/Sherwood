import {AxiosRequestConfig, AxiosResponse} from "axios";
import getApi from "./api";

export const makeGetRequest = async (url: string, options?: AxiosRequestConfig) => {
    try {
        const api = await getApi();

        return await api.get(url, {...options});
    } catch (err) {
        return err.response;
    }
}

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