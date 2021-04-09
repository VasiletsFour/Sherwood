import {defineApiCallAction} from "../../libs/rd-action-creator";
import {UserAdminQuery, UserAdminUpdate, UserApi} from "../../request/UserApi";

export const getAdminUserAction = defineApiCallAction<{ query?: UserAdminQuery }, { data: UserApi[] }, { error: string }>("get-user-admin");
export const putAdminUserAction = defineApiCallAction<{ body: UserAdminUpdate, id: number }, { data: string }, { error: string }>("put-user-admin");
