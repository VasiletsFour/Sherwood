import {ResultApi} from "../../request/ResultApi";
import {defaultState} from "../defaultState";

export interface ResultState {
    adminResult: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: ResultApi[] | null;
    };
}

export const initialResultState: ResultState = {
    adminResult: defaultState,
};
