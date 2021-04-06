import {TournamentTableApi} from "../../request/TournamentTableApi";
import {defaultState} from "../defaultState";

export interface TournamentTableState {
    tournamentTable: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: TournamentTableApi[] | null;
    };
}

export const initialTournamentTable: TournamentTableState = {
    tournamentTable: defaultState,
};
