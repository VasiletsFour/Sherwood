import { Action } from "redux";
import { errorReducer, okReducer, runningReducer, triggerReducer } from "../reducerType";
import { getLeagueListAction } from "./action";
import { initialLeagueState, LeagueState } from "./state";

export function leagueReducer(state: LeagueState = initialLeagueState as LeagueState, action: Action): LeagueState {
    // getLeagueAction
    if (getLeagueListAction.trigger.is(action)) {
        return {
            ...state,
            league: { ...triggerReducer }
        };
    }
    if (getLeagueListAction.running.is(action)) {
        return {
            ...state,
            league: { ...runningReducer }
        };
    }
    if (getLeagueListAction.ok.is(action)) {
        const { data } = action["result"];

        return {
            ...state,
            league: { data, ...okReducer }
        };
    }
    if (getLeagueListAction.error.is(action)) {
        const { error } = action["error"];

        return {
            ...state,
            league: { error, ...errorReducer }
        };
    }

    return state;
}
