import {makeGetRequest} from "../api/makeRequest";

//GET Account
export const getAccountApi = async (): Promise<string> => {
    const {data, status} = await makeGetRequest("/account");

    if (status === 200) return data;

    throw new Error("Something wrong");
}