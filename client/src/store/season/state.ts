import { SeasonApi } from "../../request/SeasonApi";
import { defaultState } from "../defaultState";

export interface SeasonState {
    seasons: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: SeasonApi[] | null;
    };
}

export const initialSeasonState: SeasonState = {
    seasons: defaultState
};
