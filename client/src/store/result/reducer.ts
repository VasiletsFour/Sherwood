import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getResultAdminAction, getResultAction} from "./action";
import {initialResultState, ResultState} from "./state";

export function resultReducer(
    state: ResultState = initialResultState as ResultState,
    action: Action
): ResultState {
    // getResultAdmin
    if (getResultAdminAction.trigger.is(action)) {
        return {
            ...state,
            resultAdmin: {...triggerReducer},
        };
    }
    if (getResultAdminAction.running.is(action)) {
        return {
            ...state,
            resultAdmin: {...runningReducer},
        };
    }
    if (getResultAdminAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            resultAdmin: {data, ...okReducer},
        };
    }
    if (getResultAdminAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            resultAdmin: {error, ...errorReducer},
        };
    }

    // getResult
    if (getResultAction.trigger.is(action)) {
        return {
            ...state,
            result: {...triggerReducer},
        };
    }
    if (getResultAction.running.is(action)) {
        return {
            ...state,
            result: {...runningReducer},
        };
    }
    if (getResultAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            result: {data, ...okReducer},
        };
    }
    if (getResultAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            result: {error, ...errorReducer},
        };
    }

    return state;
}
