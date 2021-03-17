import {defineApiCallAction} from "../../libs/rd-action-creator";
import {RefereeApi, RefereeBody} from "../../request/RefereeApi";

export const getRefereeAction = defineApiCallAction<{}, { data: RefereeApi[] }, { error: string }>("get-referee-list");
export const postAdminRefereeAction = defineApiCallAction<{ body: RefereeBody }, { data: string }, { error: string }>("post-referee-create");
export const putAdminRefereeAction = defineApiCallAction<{ body: RefereeBody, id: number }, { data: string }, { error: string }>("put-referee-update");
export const delAdminRefereeAction = defineApiCallAction<{ id: number }, { data: string }, { error: string }>("delete-referee");
