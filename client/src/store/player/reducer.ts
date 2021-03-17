import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getAdminPlayerListAction} from "./action";
import {initialPlayerState, PlayerState} from "./state";

export function playerReducer(state: PlayerState = initialPlayerState as PlayerState, action: Action): PlayerState {
    // getLeagueAction
    if (getAdminPlayerListAction.trigger.is(action)) {
        return {
            ...state,
            adminPlayer: {...triggerReducer}
        };
    }
    if (getAdminPlayerListAction.running.is(action)) {
        return {
            ...state,
            adminPlayer: {...runningReducer}
        };
    }
    if (getAdminPlayerListAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            adminPlayer: {data, ...okReducer}
        };
    }
    if (getAdminPlayerListAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            adminPlayer: {error, ...errorReducer}
        };
    }

    return state;
}
