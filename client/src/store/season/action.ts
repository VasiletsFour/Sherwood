import {defineApiCallAction} from "../../libs/rd-action-creator";
import {SeasonApi, SeasonCreate} from "../../request/SeasonApi";

export const getSeasonListAction = defineApiCallAction<{}, { data: SeasonApi[] }, { error: string }>("get-season-list");
export const postSeasonAction = defineApiCallAction<{ body: SeasonCreate }, { data: string }, { error: string }>("post-season");
export const delSeasonAction = defineApiCallAction<{ id: number }, { data: string }, { error: string }>("delete-season");
