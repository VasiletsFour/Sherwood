import {AdminPlayers} from "../../request/PlayerApi";
import {defaultState} from "../defaultState";

export interface MatchState {
    adminMatch: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: AdminPlayers[] | null;
    };
}

export const initialMatchState: MatchState = {
    adminMatch: defaultState
};
