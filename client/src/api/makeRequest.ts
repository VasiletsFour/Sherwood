import { AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken, removeToken, setToken } from "../utils";
import getApi from "./api";

export const makeGetRequest = async (url: string, options?: AxiosRequestConfig) => {
    try {
        const api = await getApi();

        let get = await api.get(url, {
            headers: {
                Authorization: `Bearer ${getToken()?.auth || ""}`,
                RefreshToken: `Bearer ${getToken()?.ref || ""}`,
            },
            ...options,
        });

        if (get.data?.newToken) {
            setToken(get.data?.newToken);

            get = await api.get(url, {
                headers: {
                    Authorization: `Bearer ${getToken()?.auth || ""}`,
                    RefreshToken: `Bearer ${getToken()?.ref || ""}`,
                },
                ...options,
            });
        }

        return get;
    } catch (err) {
        getToken() && err.response.status === 403 && removeToken();
        return err.response;
    }
};

export const makePostRequest = async <TRequest, TResponse>(
    url: string,
    data: TRequest,
    options: AxiosRequestConfig = {},
) => {
    try {
        const api = await getApi();

        return await api.post<TRequest, AxiosResponse<TResponse>>(url, data, {
            ...(options.headers || {}),
        });
    } catch (err) {
        return err.response;
    }
};

export const makePutRequest = async <TRequest, TResponse>(
    url: string,
    data: TRequest,
    options: AxiosRequestConfig = {},
) => {
    try {
        const api = await getApi();

        return await api.put<TRequest, AxiosResponse<TResponse>>(url, {
            ...(options.headers || {}),
        });
    } catch (err) {
        return err.response;
    }
};
