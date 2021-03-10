import {defineApiCallAction} from "../../libs/rd-action-creator";
import {AddTeams, CreateTeam, TeamApi, TeamQuery} from "../../request/TeamApi";

export const getTeamListAction = defineApiCallAction<{ query: TeamQuery }, { data: TeamApi[] }, { error: string }>("get-team-list");
export const getTeamAdminListAction = defineApiCallAction<{}, { data: TeamApi[] }, { error: string }>("get-team-admin-list");
export const postTeamAdminCreateAction = defineApiCallAction<{ body: CreateTeam }, { data: string }, { error: string }>("post-team-admin");
export const putTeamAdminAddAction = defineApiCallAction<{ body: AddTeams }, { data: string }, { error: string }>("put-add-team-admin");
export const putTeamAdminUpdateAction = defineApiCallAction<{ id: number, body: CreateTeam }, { data: string }, { error: string }>("put-update-team-admin");
