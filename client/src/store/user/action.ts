import {defineApiCallAction} from "../../libs/rd-action-creator";
import {UserApi} from "../../request/UserApi";

export const getAdminUserAction = defineApiCallAction<{}, { data: UserApi[] }, { error: string }>("get-user-admin");
