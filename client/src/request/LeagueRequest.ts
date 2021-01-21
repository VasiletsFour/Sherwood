import {LeagueApi} from "./LeagueApi"
import {makeGetRequest} from "../api/makeRequest";


//GET league List
export const getLeagueApi = async (): Promise<LeagueApi[]> => {
    const {data, error, status} = await makeGetRequest("/league/1");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
}