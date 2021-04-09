import {defineApiCallAction} from "../../libs/rd-action-creator";
import {TimeTableAdminApi, TimeTableApi, TimeTableCreate, TimeTableUpdate} from "../../request/TimeTableApi";

export const getTimeTableAdminAction = defineApiCallAction<{}, { data: TimeTableAdminApi }, { error: string }>("get-time-table-admin");
export const getTimeTableAction = defineApiCallAction<{}, { data: TimeTableApi }, { error: string }>("get-time-table");
export const postTimeTableCreateAdminAction = defineApiCallAction<{ body: TimeTableCreate }, { data: string }, { error: string }>("post-time-table-create-admin");
export const putTimeTableUpdateAdminAction = defineApiCallAction<{ id: number, body: TimeTableUpdate }, { data: string }, { error: string }>("put-time-table-update-admin");