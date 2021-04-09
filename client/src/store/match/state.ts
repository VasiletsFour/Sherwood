import {AdminPlayerApi} from "../../request/PlayerApi";
import {defaultState} from "../defaultState";

export interface MatchState {
    adminMatch: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: AdminPlayerApi[] | null;
    };
}

export const initialMatchState: MatchState = {
    adminMatch: defaultState
};
