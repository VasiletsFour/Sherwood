import {TeamApi} from "../../request/TeamApi";
import {defaultState} from "../defaultState";

export interface TeamState {
    teams: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: TeamApi[] | null;
    };
}

export const initialTeamState: TeamState = {
    teams: defaultState
};