import { AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken, setToken } from "../utils";
import getApi from "./api";
import { expiredRef } from "./expiredRef";

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
        expiredRef(err.response.status);
        return err.response;
    }
};

export const makePostRequest = async <TRequest>(url: string, data: TRequest, options: AxiosRequestConfig = {}) => {
    try {
        const api = await getApi();

        let post = await api.post(url, data, {
            headers: {
                Authorization: `Bearer ${getToken()?.auth || ""}`,
                RefreshToken: `Bearer ${getToken()?.ref || ""}`,
            },
            ...options,
        });

        if (post.data?.newToken) {
            post = await api.post(url, data, {
                headers: {
                    Authorization: `Bearer ${getToken()?.auth || ""}`,
                    RefreshToken: `Bearer ${getToken()?.ref || ""}`,
                },
                ...options,
            });
        }

        return post;
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

export const makeDeleteRequest = async (url: string, options?: AxiosRequestConfig) => {
    try {
        const api = await getApi();
        let del = await api.delete(url, {
            headers: {
                Authorization: `Bearer ${getToken()?.auth || ""}`,
                RefreshToken: `Bearer ${getToken()?.ref || ""}`,
            },
            ...options,
        });

        if (del.data?.newToken) {
            setToken(del.data?.newToken);

            del = await api.delete(url, {
                headers: {
                    Authorization: `Bearer ${getToken()?.auth || ""}`,
                    RefreshToken: `Bearer ${getToken()?.ref || ""}`,
                },
                ...options,
            });
        }
        return del;
    } catch (err) {
        return err.response;
    }
};
