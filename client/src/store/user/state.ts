import {UserApi} from "../../request/UserApi";
import {defaultState} from "../defaultState";

export interface UserState {
    adminUser: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: UserApi[] | null;
    };
}

export const initialUserState: UserState = {
    adminUser: defaultState,
};
