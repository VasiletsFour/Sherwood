import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {RefereeBody} from "../../request/RefereeApi";
import {delAdminRefereeApi, getRefereeApi, postAdminRefereeApi, putAdminRefereeApi} from "../../request/RefereeRequest";
import {ADMIN_REFEREE_PAGE} from "../../utils";
import {AppState} from "../store";
import {delAdminRefereeAction, getRefereeAction, postAdminRefereeAction, putAdminRefereeAction} from "./action";

interface Params {
    params: {
        body?: RefereeBody,
        id?: number
    }
}

export function* RefereeSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const adminRefereeUrlMatch = action.type === LOCATION_CHANGE && ADMIN_REFEREE_PAGE.match(action.payload.location).isMatched;

        if (adminRefereeUrlMatch && !state.refereeState.referee.data) {
            yield call(getRefereeWorker);
        }

        if (postAdminRefereeAction.trigger.is(action)) {
            yield call(CRUDRefereeWorker, {params: {body: action.body}}, postAdminRefereeApi);
        }

        if (putAdminRefereeAction.trigger.is(action)) {
            yield call(CRUDRefereeWorker, {params: {body: action.body, id: action.id}}, putAdminRefereeApi);
        }

        if (delAdminRefereeAction.trigger.is(action)) {
            yield call(CRUDRefereeWorker, {params: {id: action.id}}, delAdminRefereeApi);
        }
    }
}

function* getRefereeWorker() {
    try {
        yield put(getRefereeAction.running());
        const response = yield call(getRefereeApi);

        yield put(getRefereeAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getRefereeAction.error({params: {}, error: e}));
    }
}

function* CRUDRefereeWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) return

        yield call(api, params);
        yield call(getRefereeWorker)
    } catch (e) {
        yield call(getRefereeWorker)
    }
}
