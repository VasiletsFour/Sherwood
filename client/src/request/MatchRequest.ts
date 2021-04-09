import {makeGetRequest} from "../api/makeRequest";
import {MatchAdminQuery} from "./MatchApi";
import {AdminPlayerApi} from "./PlayerApi";

//GET AdminMatch two teams
export const getAdminMatchApi = async (query?: MatchAdminQuery): Promise<AdminPlayerApi[]> => {
    const {data, error, status} = await makeGetRequest("/admin/match", query ? {params: query} : {});

    if (status === 200) return data;

    throw new Error(error);
};