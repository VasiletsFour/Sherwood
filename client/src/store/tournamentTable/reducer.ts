import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getTournamentTableAction} from "./action";
import {initialTournamentTable, TournamentTableState} from "./state";

export function tournamentTableReducer(
    state: TournamentTableState = initialTournamentTable as TournamentTableState,
    action: Action
): TournamentTableState {
    // getTournamentTable
    if (getTournamentTableAction.trigger.is(action)) {
        return {
            ...state,
            tournamentTable: {...triggerReducer},
        };
    }
    if (getTournamentTableAction.running.is(action)) {
        return {
            ...state,
            tournamentTable: {...runningReducer},
        };
    }
    if (getTournamentTableAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            tournamentTable: {data, ...okReducer},
        };
    }
    if (getTournamentTableAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            tournamentTable: {error, ...errorReducer},
        };
    }

    return state;
}