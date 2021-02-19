import {makeDeleteRequest, makeGetRequest, makePostRequest} from "../api/makeRequest";
import {SeasonApi, SeasonCreate} from "./SeasonApi";

//GET season List
export const getSeasonApi = async (): Promise<SeasonApi[]> => {
    const {data, error, status} = await makeGetRequest("/season");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};

//POST season List
export const postSeasonApi = async (body: SeasonCreate): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/season", body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};

//DELETE season List
export const delSeasonApi = async (id: number): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/season/${id}`);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};
