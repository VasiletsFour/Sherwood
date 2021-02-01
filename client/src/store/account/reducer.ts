import {AccountState, initialAccountState} from "./state";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType"
import {Action} from "redux";
import {getAccountAction} from "./action";


export function accountReducer(state: AccountState = initialAccountState as AccountState, action: Action): AccountState {
    // getAccountAction
    if (getAccountAction.trigger.is(action)) {
        return {
            ...state,
            account: {...triggerReducer},
        };
    }
    if (getAccountAction.running.is(action)) {
        return {
            ...state,
            account: {...runningReducer},
        };
    }
    if (getAccountAction.ok.is(action)) {
        const {data} = action["result"]

        return {
            ...state,
            account: {data, ...okReducer}
        };
    }
    if (getAccountAction.error.is(action)) {
        const {error} = action["error"]

        return {
            ...state,
            account: {error, ...errorReducer}
        };
    }

    return state;
}