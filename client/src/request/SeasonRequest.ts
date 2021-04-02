import {makeDeleteRequest, makeGetRequest, makePostRequest} from "../api/makeRequest";
import {delSeasonAction, postSeasonAction} from "../store/season";
import {SeasonApi} from "./SeasonApi";

//GET season List
export const getSeasonApi = async (): Promise<SeasonApi[]> => {
    const {data, error, status} = await makeGetRequest("/season");

    if (status === 200) return data;

    throw new Error(error);
};

//POST season List
export const postSeasonApi = async ({body}: typeof postSeasonAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/season", body);

    if (status === 201) return data;

    throw new Error(error);
};

//DELETE season List
export const delSeasonApi = async ({id}: typeof delSeasonAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/season/${id}`);

    if (status === 201) return data;

    throw new Error(error);
};
