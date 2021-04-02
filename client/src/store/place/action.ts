import {defineApiCallAction} from "../../libs/rd-action-creator";
import {PlaceApi, PlaceCreate} from "../../request/PlaceApi";

export const getPlaceAdminAction = defineApiCallAction<{}, { data: PlaceApi[] }, { error: string }>("get-place-admin");
export const postPlaceAdminAction = defineApiCallAction<{ body: PlaceCreate }, { data: string }, { error: string }>("post-place-admin");
export const putPlaceAdminAction = defineApiCallAction<{ id: number, body: PlaceCreate }, { data: string }, { error: string }>("put-place-admin");
export const delPlaceAdminAction = defineApiCallAction<{ id: number }, { data: string }, { error: string }>("del-place-admin");
