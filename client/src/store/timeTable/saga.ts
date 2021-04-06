import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {TimeTableCreate, TimeTableUpdate} from "../../request/TimeTableApi";
import {getTimeTableApi, postTimeTableCreateAdminApi, putTimeTableUpdateAdminApi} from "../../request/TimeTableRequest";
import {ADMIN_TIME_TABLE_UPDATE_PAGE} from "../../utils";
import {AppState} from "../store";
import {getTimeTableAction, postTimeTableCreateAdminAction, putTimeTableUpdateAdminAction} from "./action";

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

        if (adminTimeTableUpdateUrlMatch && !state.timeTableState.timeTable.data) {
            yield call(getTimeTableWorker);
        }

        if (postTimeTableCreateAdminAction.trigger.is(action)) {
            yield call(CRUDTimeTableWorker, {params: {body: action.body}}, postTimeTableCreateAdminApi);
        }

        if (putTimeTableUpdateAdminAction.trigger.is(action)) {
            yield call(CRUDTimeTableWorker, {params: {id: action.id, body: action.body}}, putTimeTableUpdateAdminApi);
        }
    }
}

function* getTimeTableWorker() {
    try {
        yield put(getTimeTableAction.running());
        const response = yield call(getTimeTableApi);

        yield put(getTimeTableAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getTimeTableAction.error({params: {}, error: e}));
    }
}

function* CRUDTimeTableWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) return

        yield call(api, params);
        yield call(getTimeTableWorker)
    } catch (e) {
        yield call(getTimeTableWorker)
    }
}