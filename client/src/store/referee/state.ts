import {RefereeApi} from "../../request/RefereeApi";
import {defaultState} from "../defaultState";

export interface RefereeState {
    referee: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: RefereeApi[] | null;
    };
}

export const initialRefereeState: RefereeState = {
    referee: defaultState
};
