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
            result: {...triggerReducer},
        };
    }
    if (getResultAdminAction.running.is(action)) {
        return {
            ...state,
            result: {...runningReducer},
        };
    }
    if (getResultAdminAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            result: {data, ...okReducer},
        };
    }
    if (getResultAdminAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            result: {error, ...errorReducer},
        };
    }

    return state;
}
