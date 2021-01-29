import {TeamApi, TeamQuery} from "./TeamApi"
import {makeGetRequest} from "../api/makeRequest";

//GET teams List
export const getTeamsApi = async (query: TeamQuery): Promise<TeamApi[]> => {
    const {data, error, status} = await makeGetRequest("/team", {params: query});

    if (status === 200) {
        return data;
    }

    throw new Error(error);
}