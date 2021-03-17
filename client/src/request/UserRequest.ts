import {makeGetRequest, makePutRequest} from "../api/makeRequest";
import {putAdminUserAction} from "../store/user";
import {UserApi} from "./UserApi";

//GET AdminUser List
export const getAdminUserApi = async (): Promise<UserApi[]> => {
    const {data, error, status} = await makeGetRequest("/admin/user");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};

//PUT AdminUser
export const putAdminUserApi = async ({id, body}: typeof putAdminUserAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/user/${id}`, body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};
