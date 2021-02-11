import { makeGetRequest } from "../api/makeRequest";
import { TeamApi, TeamQuery } from "./TeamApi";

//GET teams List
export const getTeamsApi = async (query: TeamQuery): Promise<TeamApi[]> => {
    const { data, error, status } = await makeGetRequest("/team", { params: query });

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};
