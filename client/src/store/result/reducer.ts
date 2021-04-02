import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getResultAdminAction} from "./action";
import {initialResultState, ResultState} from "./state";

export function resultReducer(
    state: ResultState = initialResultState as ResultState,
    action: Action
): ResultState {
    // getResultAdmin
    if (getResultAdminAction.trigger.is(action)) {
        return {
            ...state,
            adminResult: {...triggerReducer},
        };
    }
    if (getResultAdminAction.running.is(action)) {
        return {
            ...state,
            adminResult: {...runningReducer},
        };
    }
    if (getResultAdminAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            adminResult: {data, ...okReducer},
        };
    }
    if (getResultAdminAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            adminResult: {error, ...errorReducer},
        };
    }

    return state;
}
