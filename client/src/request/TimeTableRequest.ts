import {makeGetRequest, makePostRequest, makePutRequest} from "../api/makeRequest";
import {postTimeTableCreateAdminAction, putTimeTableUpdateAdminAction} from "../store/timeTable";
import {TimeTableApi} from "./TimeTableApi";

//GET Time table
export const getTimeTableApi = async (): Promise<TimeTableApi[]> => {
    const {data, error, status} = await makeGetRequest("/time_table");

    if (status === 200) return data;

    throw new Error(error);
};

//POST create time table for league
export const postTimeTableCreateAdminApi = async ({body}: typeof postTimeTableCreateAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/time_table", body);

    if (status === 201) return data;

    throw new Error(error);
};

//PUT update TimeTable
export const putTimeTableUpdateAdminApi = async ({
                                                     id,
                                                     body
                                                 }: typeof putTimeTableUpdateAdminAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePutRequest(`/admin/time_table/${id}`, body);

    if (status === 201) return data;

    throw new Error(error);
};

