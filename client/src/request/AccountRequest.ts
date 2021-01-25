import {makeGetRequest} from "../api/makeRequest";

//GET Confirm Email
export const getConfirmAccountApi = async (token: string): Promise<string> => {
    const {data, status} = await makeGetRequest(`/signUp/${token}`);

    if (status === 201) {
        return data;
    }

    if (status === 400) {
        throw new Error("Try again");
    }

    throw new Error("Something wrong");
}