import { defineApiCallAction } from "../../libs/rd-action-creator";
import { LeagueApi } from "../../request/LeagueApi";

export const getLeagueListAction = defineApiCallAction<{}, { data: LeagueApi[] }, { error: string }>("get-league-list");
