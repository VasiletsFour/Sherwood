import {SeasonApi} from "../../request/SeasonApi";
import {defineApiCallAction} from "../../libs/rd-action-creator";

export const getSeasonListAction = defineApiCallAction<{}, { data: SeasonApi[] }, { error: string }>("get-season-list");