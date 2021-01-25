import {TeamApi} from "./TeamApi"
import {makeGetRequest} from "../api/makeRequest";

//GET teams List
export const getTeamsApi = async (): Promise<TeamApi[]> => {
    const {data, error, status} = await makeGetRequest("/team");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
}