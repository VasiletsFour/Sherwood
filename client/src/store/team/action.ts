import { defineApiCallAction } from "../../libs/rd-action-creator";
import { TeamApi, TeamQuery } from "../../request/TeamApi";

export const getTeamListAction = defineApiCallAction<{ query: TeamQuery }, { data: TeamApi[] }, { error: string }>(
    "get-league-list"
);
