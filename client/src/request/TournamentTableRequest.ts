import {makeGetRequest} from "../api/makeRequest";
import {TournamentTableApi} from "./TournamentTableApi";

//GET TournamentTable
export const getTournamentApi = async (): Promise<TournamentTableApi[]> => {
    const {data, error, status} = await makeGetRequest("/tournament_table");

    if (status === 200) return data;

    throw new Error(error);
};