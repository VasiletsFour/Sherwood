import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {TimeTableAdminApi, TimeTableApi, TimeTableCreate, TimeTableUpdate} from "../../request/TimeTableApi";
import {
    getTimeTableAdminApi,
    getTimeTableApi,
    postTimeTableCreateAdminApi,
    putTimeTableUpdateAdminApi
} from "../../request/TimeTableRequest";
import {ADMIN_TIME_TABLE_UPDATE_PAGE, TIME_TABLE_URL} from "../../utils";
import {AppState} from "../store";
import {
    getTimeTableAction,
    getTimeTableAdminAction,
    postTimeTableCreateAdminAction,
    putTimeTableUpdateAdminAction
} from "./action";

interface Params {
    params: {
        body?: TimeTableCreate | TimeTableUpdate
        id?: number
    }
}

export function* TimeTableSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const adminTimeTableUpdateUrlMatch = action.type === LOCATION_CHANGE && ADMIN_TIME_TABLE_UPDATE_PAGE.match(action.payload.location).isMatched;
        const timeTableUrlMatch = action.type === LOCATION_CHANGE && TIME_TABLE_URL.match(action.payload.location).isMatched;


        if (adminTimeTableUpdateUrlMatch && !state.timeTableState.timeTableAdmin.data) {
            yield call(getTimeTableWorker, getTimeTableAdminAction, getTimeTableAdminApi);
        }

        if (timeTableUrlMatch) {
            yield call(getTimeTableWorker, getTimeTableAction, getTimeTableApi);
        }

        if (postTimeTableCreateAdminAction.trigger.is(action)) {
            yield call(CRUDTimeTableWorker, {params: {body: action.body}}, postTimeTableCreateAdminApi);
        }

        if (putTimeTableUpdateAdminAction.trigger.is(action)) {
            yield call(CRUDTimeTableWorker, {params: {id: action.id, body: action.body}}, putTimeTableUpdateAdminApi);
        }
    }
}


function* getTimeTableWorker(action: typeof getTimeTableAdminAction | typeof getTimeTableAction, api: (this: unknown, ...args: any) => Promise<TimeTableAdminApi[] | TimeTableApi[]>) {
    try {
        yield put(action.running());
        const response = yield call(api);

        yield put(action.ok({params: {}, result: response}));
    } catch (e) {
        yield put(action.error({params: {}, error: e}));
    }
}

function* CRUDTimeTableWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) return

        yield call(api, params);
        yield call(getTimeTableWorker, getTimeTableAdminAction, getTimeTableAdminApi);
    } catch (e) {
        yield call(getTimeTableWorker, getTimeTableAdminAction, getTimeTableAdminApi);
    }
}