import {defineApiCallAction} from "../../libs/rd-action-creator";
import {TimeTableApi, TimeTableCreate} from "../../request/TimeTableApi";

export const getTimeTableAction = defineApiCallAction<{}, { data: TimeTableApi }, { error: string }>("get-time-table");
export const postTimeTableCreateAdminAction = defineApiCallAction<{ body: TimeTableCreate }, { data: string }, { error: string }>("post-time-table-create-admin");