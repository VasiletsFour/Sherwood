import {SignInBody, SignUpBody} from "./AuthApi";
import {makeGetRequest, makePostRequest} from "../api/makeRequest";

//POST create user
export const postSignUpApi = async (body: SignUpBody): Promise<string> => {
    const {data, error, status} = await makePostRequest("/auth/signUp", body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
}

//POST login
export const postSignInApi = async (body: SignInBody): Promise<string> => {
    const {data, error, status} = await makePostRequest("/auth/login", body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
}


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
