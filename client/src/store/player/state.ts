import {AdminPlayerApi} from "../../request/PlayerApi";
import {defaultState} from "../defaultState";

export interface PlayerState {
    adminPlayer: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: AdminPlayerApi | null;
    };
}

export const initialPlayerState: PlayerState = {
    adminPlayer: defaultState
};
