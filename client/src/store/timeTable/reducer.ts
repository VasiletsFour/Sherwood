import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getTimeTableAction, getTimeTableAdminAction} from "./action";
import {initialTimeTableState, TimeTableState} from "./state";

export function timeTableReducer(
    state: TimeTableState = initialTimeTableState as TimeTableState,
    action: Action
): TimeTableState {
    // getTimeTableAdmin
    if (getTimeTableAdminAction.trigger.is(action)) {
        return {
            ...state,
            timeTableAdmin: {...triggerReducer},
        };
    }
    if (getTimeTableAdminAction.running.is(action)) {
        return {
            ...state,
            timeTableAdmin: {...runningReducer},
        };
    }
    if (getTimeTableAdminAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            timeTableAdmin: {data, ...okReducer},
        };
    }
    if (getTimeTableAdminAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            timeTableAdmin: {error, ...errorReducer},
        };
    }

    // getTimeTable
    if (getTimeTableAction.trigger.is(action)) {
        return {
            ...state,
            timeTable: {...triggerReducer},
        };
    }
    if (getTimeTableAction.running.is(action)) {
        return {
            ...state,
            timeTable: {...runningReducer},
        };
    }
    if (getTimeTableAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            timeTable: {data, ...okReducer},
        };
    }
    if (getTimeTableAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            timeTable: {error, ...errorReducer},
        };
    }

    return state;
}