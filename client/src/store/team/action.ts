import {defineApiCallAction} from "../../libs/rd-action-creator";
import {AddTeams, CreateTeam, TeamApi, TeamDelQuery, TeamQuery} from "../../request/TeamApi";

export const getTeamListAction = defineApiCallAction<{ query: TeamQuery }, { data: TeamApi[] }, { error: string }>("get-team-list");
export const getTeamAdminListAction = defineApiCallAction<{}, { data: TeamApi[] }, { error: string }>("get-team-admin-list");
export const postTeamAdminCreateAction = defineApiCallAction<{ body: CreateTeam }, { data: string }, { error: string }>("post-team-admin");
export const putTeamAdminAddAction = defineApiCallAction<{ body: AddTeams }, { data: string }, { error: string }>("put-add-team-admin");
export const putTeamAdminUpdateAction = defineApiCallAction<{ id: number, body: CreateTeam, league_id?: number }, { data: string }, { error: string }>("put-update-team-admin");
export const delTeamAdminAction = defineApiCallAction<{ id: number, query: TeamDelQuery, league_id?: number }, { data: string }, { error: string }>("del-team-admin");
