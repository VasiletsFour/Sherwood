import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {SeasonCreate} from "../../request/SeasonApi";
import {delSeasonApi, getSeasonApi, postSeasonApi} from "../../request/SeasonRequest";
import {ADMIN_SEASON_PAGE} from "../../utils";
import {AppState} from "../store";
import {delSeasonAction, getSeasonListAction, postSeasonAction} from "./action";

interface Params {
    params: {
        body?: SeasonCreate,
        id?: number
    }
}

export function* SeasonSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const adminSeasonUrlMatch = action.type === LOCATION_CHANGE && ADMIN_SEASON_PAGE.match(action.payload.location).isMatched;


        if (adminSeasonUrlMatch && !state.seasonState.seasons.data) {
            yield call(getSeasonWorker);
        }

        if (postSeasonAction.trigger.is(action)) {
            yield call(CRUDSeasonWorker, {params: {body: action.body}}, postSeasonApi);
        }

        if (delSeasonAction.trigger.is(action)) {
            yield call(CRUDSeasonWorker, {params: {id: action.id}}, delSeasonApi);
        }
    }
}

function* getSeasonWorker() {
    try {
        yield put(getSeasonListAction.running());
        const response = yield call(getSeasonApi);

        yield put(getSeasonListAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getSeasonListAction.error({params: {}, error: e}));
    }
}

function* CRUDSeasonWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) return

        yield call(api, params);
        yield call(getSeasonWorker)
    } catch (e) {
        yield call(getSeasonWorker)
    }
}
