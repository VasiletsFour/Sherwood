import {makeGetRequest} from "../api/makeRequest";

//GET Confirm Email
export const getConfirmAccountApi = async (token: string): Promise<string> => {
    const {data, status} = await makeGetRequest(`/auth/confirm/${token}`);

    if (status === 201) {
        return data;
    }

    if (status === 400) {
        throw new Error(data.error);
    }

    throw new Error("Something wrong");
}