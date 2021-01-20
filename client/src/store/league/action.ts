import {LeagueApi} from "../../request/LeagueApi";
import {defineApiCallAction} from "../../libs/rd-action-creator";

export const getLeagueListAction = defineApiCallAction<{}, { data: LeagueApi[] }, { error: string }>(
    "get-league-list"
);