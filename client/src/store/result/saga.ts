import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {ResultApi, ResultCreate, ResultUpdate} from "../../request/ResultApi";
import {getResultAdminApi, getResultApi, postResultAdminApi, putResultAdminApi} from "../../request/ResultRequest";
import {ADMIN_RESULT_PAGE, MATCH_RESULT_PAGE} from "../../utils";
import {AppState} from "../store";
import {getResultAction, getResultAdminAction, postResultAdminAction, putResultAdminAction} from "./action";

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

        if (adminResultUrlMatch && !state.resultState.resultAdmin.data) {
            yield call(getResultWorker, getResultAdminAction, getResultAdminApi);
        }

        if (resultUrlMatch) {
            yield call(getResultWorker, getResultAction, getResultApi);
        }

        if (postResultAdminAction.trigger.is(action)) {
            yield call(CRUDResultAdminWorker, {params: {body: action.body}}, postResultAdminApi);
        }

        if (putResultAdminAction.trigger.is(action)) {
            yield call(CRUDResultAdminWorker, {params: {id: action.id, body: action.body}}, putResultAdminApi);
        }
    }
}


function* getResultWorker(action: typeof getResultAdminAction | typeof getResultAction, api: (this: unknown, ...args: any) => Promise<ResultApi[]>) {
    try {
        yield put(action.running());
        const response = yield call(api);

        yield put(action.ok({params: {}, result: response}));
    } catch (e) {
        yield put(action.error({params: {}, error: e}));
    }
}

function* CRUDResultAdminWorker({params}: Params, api: (this: unknown, ...args: any[]) => Promise<string>) {
    try {
        if (!params.id && !params.body) return

        yield call(api, params)
        yield call(getResultWorker, getResultAdminAction, getResultAdminApi)
    } catch (e) {
        yield call(getResultWorker, getResultAdminAction, getResultAdminApi)
    }
}
