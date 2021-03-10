import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getAdminUserAction} from "./action";
import {initialUserState, UserState} from "./state";

export function userReducer(
    state: UserState = initialUserState as UserState,
    action: Action
): UserState {
    // getAdminUser
    if (getAdminUserAction.trigger.is(action)) {
        return {
            ...state,
            adminUser: {...triggerReducer},
        };
    }
    if (getAdminUserAction.running.is(action)) {
        return {
            ...state,
            adminUser: {...runningReducer},
        };
    }
    if (getAdminUserAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            adminUser: {data, ...okReducer},
        };
    }
    if (getAdminUserAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            adminUser: {error, ...errorReducer},
        };
    }

    return state;
}
