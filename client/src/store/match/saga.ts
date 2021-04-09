import {call, put, take} from "redux-saga/effects";
import {MatchAdminQuery} from "../../request/MatchApi";
import {getAdminMatchApi} from "../../request/MatchRequest";
import {getAdminMatchAction} from "./action";


export function* MatchSaga() {
    while (true) {
        const action = yield take("*");

        if (getAdminMatchAction.trigger.is(action)) {
            yield call(getMatchAdminWorker, action.query);
        }
    }
}

function* getMatchAdminWorker(query: MatchAdminQuery) {
    try {
        yield put(getAdminMatchAction.running());
        const response = yield call(getAdminMatchApi, query);

        yield put(getAdminMatchAction.ok({params: {query}, result: response}));
    } catch (e) {
        yield put(getAdminMatchAction.error({params: {query}, error: e}));
    }
}