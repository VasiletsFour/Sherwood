import { defineApiCallAction } from "../../libs/rd-action-creator";
import { SeasonApi } from "../../request/SeasonApi";

export const getSeasonListAction = defineApiCallAction<{}, { data: SeasonApi[] }, { error: string }>("get-season-list");
