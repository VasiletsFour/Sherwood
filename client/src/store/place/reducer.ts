import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getPlaceAdminAction} from "./action";
import {initialPlaceState, PlaceState} from "./state";

export function placeReducer(state: PlaceState = initialPlaceState as PlaceState, action: Action): PlaceState {
    // getLeagueAction
    if (getPlaceAdminAction.trigger.is(action)) {
        return {
            ...state,
            placeAdmin: {...triggerReducer}
        };
    }
    if (getPlaceAdminAction.running.is(action)) {
        return {
            ...state,
            placeAdmin: {...runningReducer}
        };
    }
    if (getPlaceAdminAction.ok.is(action)) {
        const {data} = action["result"];

        return {
            ...state,
            placeAdmin: {data, ...okReducer}
        };
    }
    if (getPlaceAdminAction.error.is(action)) {
        const {error} = action["error"];

        return {
            ...state,
            placeAdmin: {error, ...errorReducer}
        };
    }

    return state;
}
