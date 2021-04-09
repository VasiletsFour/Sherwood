import {defineApiCallAction} from "../../libs/rd-action-creator";
import {MatchAdminQuery} from "../../request/MatchApi";
import {AdminPlayerApi} from "../../request/PlayerApi";

export const getAdminMatchAction = defineApiCallAction<{ query: MatchAdminQuery }, { data: AdminPlayerApi[] }, { error: string }>("get-admin-match");
