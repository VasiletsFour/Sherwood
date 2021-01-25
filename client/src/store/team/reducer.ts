import {initialTeamState, TeamState} from "./state";
import {getTeamListAction} from "./action";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType"
import {Action} from "redux";


export function teamReducer(state: TeamState = initialTeamState as TeamState, action: Action): TeamState {
    // getLeagueAction
    if (getTeamListAction.trigger.is(action)) {
        return {
            ...state,
            teams: {...triggerReducer},
        };
    }
    if (getTeamListAction.running.is(action)) {
        return {
            ...state,
            teams: {...runningReducer},
        };
    }
    if (getTeamListAction.ok.is(action)) {
        const {data} = action["result"]

        return {
            ...state,
            teams: {data, ...okReducer}
        };
    }
    if (getTeamListAction.error.is(action)) {
        const {error} = action["error"]

        return {
            ...state,
            teams: {error, ...errorReducer}
        };
    }

    return state;
}