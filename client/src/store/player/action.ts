import {defineApiCallAction} from "../../libs/rd-action-creator";
import {AdminPlayerApi, PlayerAdminQuery, PlayerBody, PlayerUpdate} from "../../request/PlayerApi";

export const getAdminPlayerListAction = defineApiCallAction<{ query?: PlayerAdminQuery }, { data: AdminPlayerApi[] }, { error: string }>("get-admin-player-list");
export const postAdminPlayerAction = defineApiCallAction<{ body: PlayerBody }, { data: string }, { error: string }>("post-admin-player");
export const putAdminPlayerAction = defineApiCallAction<{ body: PlayerUpdate, id: number }, { data: string }, { error: string }>("put-admin-player");
export const delAdminPlayerAction = defineApiCallAction<{ id: number }, { data: string }, { error: string }>("del-admin-player");
