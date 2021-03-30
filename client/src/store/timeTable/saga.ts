import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {TimeTableCreate} from "../../request/TimeTableApi";
import {getTimeTableApi, postTimeTableCreateAdminApi} from "../../request/TimeTableRequest";
import {ADMIN_TIME_TABLE_UPDATE_PAGE} from "../../utils";
import {getTimeTableAction, postTimeTableCreateAdminAction} from "./action";

interface Params {
    params: {
        body?: TimeTableCreate
        id?: number
    }
}

export function* TimeTableSaga() {
    while (true) {
        const action = yield take("*");
        const adminTimeTableUpdateUrlMatch: any = action.type === LOCATION_CHANGE && ADMIN_TIME_TABLE_UPDATE_PAGE.match(action.payload.location).isMatched;

        if (adminTimeTableUpdateUrlMatch) {
            yield call(getTimeTableWorker);
        }

        if (postTimeTableCreateAdminAction.trigger.is(action)) {
            yield call(CRUDUserWorker, {params: {body: action.body}}, postTimeTableCreateAdminApi);
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

function* CRUDUserWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) return

        yield call(api, params);
    } catch (e) {
        yield call(getTimeTableWorker)
    }
}