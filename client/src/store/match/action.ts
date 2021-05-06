import {defineApiCallAction} from "../../libs/rd-action-creator";
import {MatchAdminQuery} from "../../request/MatchApi";
import {AdminPlayers} from "../../request/PlayerApi";

export const getAdminMatchAction = defineApiCallAction<{ query: MatchAdminQuery }, { data: AdminPlayers[] }, { error: string }>("get-admin-match");
