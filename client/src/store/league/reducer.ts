import {initialLeagueState, LeagueState} from "./state";
import {getLeagueListAction} from "./action";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType"

export function leagueReducer(state: LeagueState = initialLeagueState as LeagueState, action: any): LeagueState {
    // getLeagueAction

    if (getLeagueListAction.trigger.is(action)) {
        return {
            ...state,
            league: {...triggerReducer},
        };
    }
    if (getLeagueListAction.running.is(action)) {
        return {
            ...state,
            league: {...runningReducer},
        };
    }
    if (getLeagueListAction.ok.is(action)) {
        const data: any = action.result
        return {
            ...state,
            league: {
                data,
                ...okReducer
            },
        };
    }
    if (getLeagueListAction.error.is(action)) {
        return {
            ...state,
            league: {
                error: "errr",
                ...errorReducer
            },
        };
    }

    return state;
}