import {makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {delPlaceAdminAction, postPlaceAdminAction, putPlaceAdminAction} from "../store/place";
import {PlaceApi} from "./PlaceApi";

//GET place List for admin
export const getPlaceAdminApi = async (): Promise<PlaceApi[]> => {
    const {data, error, status} = await makeGetRequest("/admin/place");

    if (status === 200) return data;

    throw new Error(error);
};

//POST create place for admin
export const postPlaceAdminApi = async ({body}: typeof postPlaceAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/place", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT update place for admin
export const putPlaceAdminApi = async ({
                                           id,
                                           body
                                       }: typeof putPlaceAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/place/${id}`, body);

    if (status === 201) return data;

    throw new Error(error);
};

//DELETE place for admin
export const delPlaceApi = async ({id}: typeof delPlaceAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/place/${id}`);

    if (status === 201) return data;

    throw new Error(error);
};
