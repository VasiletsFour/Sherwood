import {TeamApi} from "../../request/TeamApi";

export interface TeamState {
    teams: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: TeamApi[] | null;
    };
}

export const initialTeamState: TeamState = {
    teams: {
        finished: false,
        loading: false,
        error: null,
        data: null,
    }
};