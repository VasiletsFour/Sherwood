import {makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {delLeagueAction, postLeagueAction, putLeagueAction} from "../store/league";
import {LeagueApi} from "./LeagueApi";

//GET league List
export const getLeagueApi = async (): Promise<LeagueApi[]> => {
    const {data, error, status} = await makeGetRequest("/league");

    if (status === 200) return data;

    throw new Error(error);
};

//POST create league admin
export const postLeagueApi = async ({body}: typeof postLeagueAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/league", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT update league admin
export const putLeagueApi = async ({body}: typeof putLeagueAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest("/admin/league/", body);

    if (status === 201) return data;

    throw new Error(error);
};

//DELETE update league admin
export const delLeagueApi = async ({id}: typeof delLeagueAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/league/${id}`);

    if (status === 201) return data;

    throw new Error(error);
};
