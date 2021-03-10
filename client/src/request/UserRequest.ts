import {makeGetRequest} from "../api/makeRequest";
import {UserApi} from "./UserApi";

//GET AdminUser List
export const getAdminUserApi = async (): Promise<UserApi[]> => {
    const {data, error, status} = await makeGetRequest("/admin/user");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};
