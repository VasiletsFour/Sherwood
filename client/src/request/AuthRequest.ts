import {makeGetRequest, makePostRequest} from "../api/makeRequest";
import {ConfirmAgain, SignInBody, SignUpBody} from "./AuthApi";

//POST create user
export const postSignUpApi = async (body: SignUpBody): Promise<string> => {
    const {data, error, status} = await makePostRequest("/auth/signUp", body);

    if (status === 201) return data;

    throw new Error(data["error"] || error);
};

//POST login
export const postSignInApi = async (body: SignInBody): Promise<string> => {
    const {data, error, status} = await makePostRequest("/auth/login", body);

    if (status === 201) return data;

    throw new Error(data["error"] || error);
};

//GET Confirm Email
export const getConfirmAccountApi = async (token: string): Promise<string> => {
    const {data, status} = await makeGetRequest(`/auth/confirm/${token}`);

    if (status === 201) return data;

    if (status === 400) throw new Error(data.error);

    throw new Error("Request error");
};

//POST confirm Again
export const postConfirmApi = async (body: ConfirmAgain): Promise<string> => {
    const {data, error, status} = await makePostRequest("/auth/confirm", body);

    if (status === 200) return data;

    throw new Error(data["error"] || error);
};
