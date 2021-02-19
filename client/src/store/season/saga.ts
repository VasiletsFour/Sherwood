import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {delSeasonApi, getSeasonApi, postSeasonApi} from "../../request/SeasonRequest";
import {AppState} from "../store";
import {delSeasonAction, getSeasonListAction, postSeasonAction} from "./action";

export function* SeasonSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const seasonUrlMatch = action.type === LOCATION_CHANGE;

        if (seasonUrlMatch && !state.seasonState.seasons.data) {
            yield call(getSeasonWorker);
        }

        if (postSeasonAction.trigger.is(action)) {
            yield call(postSeasonWorker, action);
        }

        if (delSeasonAction.trigger.is(action)) {
            yield call(delSeasonWorker, action);
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

function* postSeasonWorker({body}: typeof postSeasonAction.trigger.typeInterface) {
    try {
        if (!body) {
            return
        }

        yield call(postSeasonApi, body);
        yield call(getSeasonWorker)
    } catch (e) {
        yield call(getSeasonWorker)
    }
}

function* delSeasonWorker({id}: typeof delSeasonAction.trigger.typeInterface) {
    try {
        if (!id) {
            return
        }

        yield call(delSeasonApi, id);
        yield call(getSeasonWorker)
    } catch (e) {
        yield call(getSeasonWorker)
    }
}
