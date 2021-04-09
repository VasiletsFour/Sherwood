import {TimeTableAdminApi, TimeTableApi} from "../../request/TimeTableApi";
import {defaultState} from "../defaultState";

export interface TimeTableState {
    timeTableAdmin: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: TimeTableAdminApi[] | null;
    };
    timeTable: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: TimeTableApi[] | null;
    };
}

export const initialTimeTableState: TimeTableState = {
    timeTableAdmin: defaultState,
    timeTable: defaultState,
};
