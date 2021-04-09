import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getAdminMatchAction} from "./action";
import {initialMatchState, MatchState} from "./state";

export function matchReducer(state: MatchState = initialMatchState as MatchState, action: Action): MatchState {
    // getAdminMatch
    if (getAdminMatchAction.trigger.is(action)) {
        return {
            ...state,
            adminMatch: {...triggerReducer}
        };
    }
    if (getAdminMatchAction.running.is(action)) {
        return {
            ...state,
            adminMatch: {...runningReducer}
        };
    }
    if (getAdminMatchAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            adminMatch: {data, ...okReducer}
        };
    }
    if (getAdminMatchAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            adminMatch: {error, ...errorReducer}
        };
    }

    return state;
}
