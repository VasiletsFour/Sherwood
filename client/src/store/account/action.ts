import { defineApiCallAction } from "../../libs/rd-action-creator";
import { AccountApi } from "../../request/AccountApi";

export const getAccountAction = defineApiCallAction<
    { strictUpdate?: boolean },
    { data: AccountApi },
    { error: string }
>("get-account");
