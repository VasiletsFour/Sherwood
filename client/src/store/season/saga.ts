import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {getSeasonListAction} from "./action";
import {getSeasonApi} from "../../request/SeasonRequest";
import {AppState} from "../store";


export function* SeasonSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const seasonUrlMatch = action.type === LOCATION_CHANGE

        if (seasonUrlMatch && !state.seasonState.seasons.finished) {
            yield call(getSeasonWorker);
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
