import { AccountApi } from "../../request/AccountApi";
import { defaultState } from "../defaultState";

export interface AccountState {
    account: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: AccountApi | null;
    };
}

export const initialAccountState: AccountState = {
    account: defaultState,
};
