import {makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {delAdminPlayerAction, postAdminPlayerAction, putAdminPlayerAction} from "../store/player";
import {AdminPlayerApi, PlayerAdminQuery} from "./PlayerApi";

//GET AdminPlayer List
export const getAdminPlayerApi = async (query?: PlayerAdminQuery): Promise<AdminPlayerApi> => {
    const {data, error, status} = await makeGetRequest("/admin/player", query ? {params: query} : {});

    if (status === 200) return data;

    throw new Error(error);
};

//POST AdminPlayer
export const postAdminPlayerApi = async ({body}: typeof postAdminPlayerAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/player", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT AdminPlayer
export const putAdminPlayerApi = async (
    {body, id}: typeof putAdminPlayerAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/player/${id}`, body);

    if (status === 201) return data;

    throw new Error(error);
};

//DELETE AdminPlayer
export const delAdminPlayerApi = async ({id}: typeof delAdminPlayerAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/player/${id}`);

    if (status === 201) return data;

    throw new Error(error);
};