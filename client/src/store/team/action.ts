import {TeamApi} from "../../request/TeamApi";
import {defineApiCallAction} from "../../libs/rd-action-creator";

export const getTeamListAction = defineApiCallAction<{}, { data: TeamApi[] }, { error: string }>(
    "get-league-list"
);