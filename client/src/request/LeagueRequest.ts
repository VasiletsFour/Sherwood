import {LeagueApi} from "./LeagueApi"
import {makeGetRequest} from "../api/makeRequest";

export const getLeagueApi = async (): Promise<LeagueApi[]> => {
    const {data, error, status} = await makeGetRequest("/league/1");

    if (status === 200) {
        return data;
    } else {
        throw new Error(error);
    }
}