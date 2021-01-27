import {SeasonApi} from "./SeasonApi"
import {makeGetRequest} from "../api/makeRequest";

//GET season List
export const getSeasonApi = async (): Promise<SeasonApi[]> => {
    const {data, error, status} = await makeGetRequest("/season");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
}