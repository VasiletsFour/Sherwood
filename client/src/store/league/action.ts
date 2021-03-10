import {defineApiCallAction} from "../../libs/rd-action-creator";
import {CreateLeagues, LeagueApi, UpdateLeagues} from "../../request/LeagueApi";

export const getLeagueListAction = defineApiCallAction<{}, { data: LeagueApi[] }, { error: string }>("get-league-list");
export const postLeagueAction = defineApiCallAction<{ body: CreateLeagues }, { data: string }, { error: string }>("post-league");
export const putLeagueAction = defineApiCallAction<{ body: UpdateLeagues }, { data: string }, { error: string }>("put-league");
export const delLeagueAction = defineApiCallAction<{ id: number }, { data: string }, { error: string }>("del-league");
