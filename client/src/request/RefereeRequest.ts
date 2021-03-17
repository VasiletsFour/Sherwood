import {makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {delAdminRefereeAction, postAdminRefereeAction, putAdminRefereeAction} from "../store/referee";
import {RefereeApi} from "./RefereeApi";

//GET Referee List
export const getRefereeApi = async (): Promise<RefereeApi[]> => {
    const {data, error, status} = await makeGetRequest("/referee");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};

//POST Admin Referee
export const postAdminRefereeApi = async ({body}: typeof postAdminRefereeAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/referee", body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};

//PUT Admin Referee
export const putAdminRefereeApi = async ({
                                             body,
                                             id
                                         }: typeof putAdminRefereeAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/referee/${id}`, body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};

//DELETE Admin Referee
export const delAdminRefereeApi = async ({id}: typeof delAdminRefereeAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/referee/${id}`);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};
