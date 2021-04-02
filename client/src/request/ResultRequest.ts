import {makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {postResultAdminAction, putResultAdminAction} from "../store/result";
import {ResultApi} from "./ResultApi";

//GET result List for admin
export const getResultAdminApi = async (): Promise<ResultApi[]> => {
    const {data, error, status} = await makeGetRequest("/admin/result");

    if (status === 200) return data;

    throw new Error(error);
};

//POST create result for admin
export const postResultAdminApi = async ({body}: typeof postResultAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/result", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT create result for admin
export const putResultAdminApi = async ({
                                            id,
                                            body
                                        }: typeof putResultAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/result/${id}`, body);

    if (status === 201) return data;

    throw new Error(error);
};