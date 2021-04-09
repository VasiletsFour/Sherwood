import {ResultApi} from "../../request/ResultApi";
import {defaultState} from "../defaultState";

export interface ResultState {
    resultAdmin: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: ResultApi[] | null;
    };
    result: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: ResultApi[] | null;
    };
}

export const initialResultState: ResultState = {
    resultAdmin: defaultState,
    result: defaultState
};
