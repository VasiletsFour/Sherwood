import {defineApiCallAction} from "../../libs/rd-action-creator";
import {ResultApi, ResultCreate, ResultUpdate} from "../../request/ResultApi";

export const getResultAdminAction = defineApiCallAction<{}, { data: ResultApi[] }, { error: string }>("get-result-admin");
export const getResultAction = defineApiCallAction<{}, { data: ResultApi[] }, { error: string }>("get-result");
export const postResultAdminAction = defineApiCallAction<{ body: ResultCreate }, { data: string }, { error: string }>("post-result-admin");
export const putResultAdminAction = defineApiCallAction<{ id: number, body: ResultUpdate }, { data: string }, { error: string }>("put-result-admin");
