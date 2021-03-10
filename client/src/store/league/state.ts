import {LeagueApi} from "../../request/LeagueApi";
import {defaultState} from "../defaultState";

export interface LeagueState {
    league: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: LeagueApi[] | null;
    };
}

export const initialLeagueState: LeagueState = {
    league: defaultState
};
