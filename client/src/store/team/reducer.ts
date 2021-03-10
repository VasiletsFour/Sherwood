import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getTeamAdminListAction, getTeamListAction} from "./action";
import {initialTeamState, TeamState} from "./state";

export function teamReducer(state: TeamState = initialTeamState as TeamState, action: Action): TeamState {
    // getTeamAction
    if (getTeamListAction.trigger.is(action)) {
        return {
            ...state,
            teams: {...triggerReducer}
        };
    }
    if (getTeamListAction.running.is(action)) {
        return {
            ...state,
            teams: { ...runningReducer }
        };
    }
    if (getTeamListAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            teams: {data, ...okReducer}
        };
    }
    if (getTeamListAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            teams: {error, ...errorReducer}
        };
    }

    // getTeamAdminAction
    if (getTeamAdminListAction.trigger.is(action)) {
        return {
            ...state,
            teamsAdmin: {...triggerReducer}
        };
    }
    if (getTeamAdminListAction.running.is(action)) {
        return {
            ...state,
            teamsAdmin: {...runningReducer}
        };
    }
    if (getTeamAdminListAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            teamsAdmin: {data, ...okReducer}
        };
    }
    if (getTeamAdminListAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            teamsAdmin: {error, ...errorReducer}
        };
    }

    return state;
}
