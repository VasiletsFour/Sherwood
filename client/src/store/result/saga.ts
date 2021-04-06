import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {ResultCreate, ResultUpdate} from "../../request/ResultApi";
import {getResultAdminApi, postResultAdminApi, putResultAdminApi} from "../../request/ResultRequest";
import {ADMIN_RESULT_PAGE, MATCH_RESULT_PAGE} from "../../utils";
import {AppState} from "../store";
import {getResultAdminAction, postResultAdminAction, putResultAdminAction} from "./action";

interface Params {
    params: {
        body?: ResultCreate | ResultUpdate,
        id?: number
    }
}

export function* ResultSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const resultUrlMatch = action.type === LOCATION_CHANGE && MATCH_RESULT_PAGE.match(action.payload.location).isMatched
        const adminResultUrlMatch = action.type === LOCATION_CHANGE && ADMIN_RESULT_PAGE.match(action.payload.location).isMatched;

        if ((resultUrlMatch || adminResultUrlMatch) && !state.resultState.result.data) {
            yield call(getResultAdminWorker);
        }

        if (postResultAdminAction.trigger.is(action)) {
            yield call(CRUDResultAdminWorker, {params: {body: action.body}}, postResultAdminApi);
        }

        if (putResultAdminAction.trigger.is(action)) {
            yield call(CRUDResultAdminWorker, {params: {id: action.id, body: action.body}}, putResultAdminApi);
        }
    }
}

function* getResultAdminWorker() {
    try {
        yield put(getResultAdminAction.running());
        const response = yield call(getResultAdminApi);

        yield put(getResultAdminAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getResultAdminAction.error({params: {}, error: e}));
    }
}

function* CRUDResultAdminWorker({params}: Params, api: (this: unknown, ...args: any[]) => Promise<string>) {
    try {
        if (!params.id && !params.body) return

        yield call(api, params)
        yield call(getResultAdminWorker)
    } catch (e) {
        yield call(getResultAdminWorker)
    }
}
