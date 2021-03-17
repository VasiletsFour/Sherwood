import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getRefereeAction} from "./action";
import {initialRefereeState, RefereeState} from "./state";

export function refereeReducer(state: RefereeState = initialRefereeState as RefereeState, action: Action): RefereeState {
    // getRefereeAction
    if (getRefereeAction.trigger.is(action)) {
        return {
            ...state,
            referee: {...triggerReducer}
        };
    }
    if (getRefereeAction.running.is(action)) {
        return {
            ...state,
            referee: {...runningReducer}
        };
    }
    if (getRefereeAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            referee: {data, ...okReducer}
        };
    }
    if (getRefereeAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            referee: {error, ...errorReducer}
        };
    }

    return state;
}
