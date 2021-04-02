import {makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {
    delTeamAdminAction,
    postTeamAdminCreateAction,
    putTeamAdminAddAction,
    putTeamAdminUpdateAction
} from "../store/team";
import {TeamApi, TeamQuery} from "./TeamApi";

//GET teams List
export const getTeamsApi = async (query: TeamQuery): Promise<TeamApi[]> => {
    const {data, error, status} = await makeGetRequest("/team", {params: query});

    if (status === 200) return data;

    throw new Error(error);
};

//GET teams admin List
export const getAdminTeamsApi = async (): Promise<TeamApi[]> => {
    const {data, error, status} = await makeGetRequest("/admin/team");

    if (status === 200) return data;

    throw new Error(error);
};

//POST create team admin
export const postTeamAdminApi = async ({body}: typeof postTeamAdminCreateAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/team", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT add team admin
export const putTeamAdminApi = async ({body}: typeof putTeamAdminAddAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest("/admin/team", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT update team admin
export const putTeamUpdateAdminApi = async ({id, body}
                                                : typeof putTeamAdminUpdateAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/team/${id}`, body);

    if (status === 201) return data;

    throw new Error(error);
};

//DELETE team admin
export const delTeamAdminApi = async ({id, query}
                                          : typeof delTeamAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/team/${id}`, query ? {params: query} : {});

    if (status === 200) return data;

    throw new Error(error);
};