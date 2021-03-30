import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getTimeTableAction} from "./action";
import {initialTimeTableState, TimeTableState} from "./state";

export function timeTableReducer(
    state: TimeTableState = initialTimeTableState as TimeTableState,
    action: Action
): TimeTableState {
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