import {LeagueApi} from "../../request/LeagueApi";

export interface LeagueState {
    league: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: LeagueApi[] | null;
    };
}

export const initialLeagueState: LeagueState = {
    league: {
        finished: false,
        loading: false,
        error: null,
        data: null,
    }
};
