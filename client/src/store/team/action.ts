import {TeamApi, TeamQuery} from "../../request/TeamApi";
import {defineApiCallAction} from "../../libs/rd-action-creator";

export const getTeamListAction = defineApiCallAction<{ query: TeamQuery }, { data: TeamApi[] }, { error: string }>("get-league-list");