import {TimeTableApi} from "../../request/TimeTableApi";
import {defaultState} from "../defaultState";

export interface TimeTableState {
    timeTable: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: TimeTableApi[] | null;
    };
}

export const initialTimeTableState: TimeTableState = {
    timeTable: defaultState,
};
