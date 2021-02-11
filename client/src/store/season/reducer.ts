import { Action } from "redux";
import { errorReducer, okReducer, runningReducer, triggerReducer } from "../reducerType";
import { getSeasonListAction } from "./action";
import { initialSeasonState, SeasonState } from "./state";

export function seasonReducer(state: SeasonState = initialSeasonState as SeasonState, action: Action): SeasonState {
    // getSeasonAction
    if (getSeasonListAction.trigger.is(action)) {
        return {
            ...state,
            seasons: { ...triggerReducer }
        };
    }
    if (getSeasonListAction.running.is(action)) {
        return {
            ...state,
            seasons: { ...runningReducer }
        };
    }
    if (getSeasonListAction.ok.is(action)) {
        const { data } = action["result"];

        return {
            ...state,
            seasons: { data, ...okReducer }
        };
    }
    if (getSeasonListAction.error.is(action)) {
        const { error } = action["error"];

        return {
            ...state,
            seasons: { error, ...errorReducer }
        };
    }

    return state;
}
