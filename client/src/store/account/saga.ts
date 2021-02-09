import {call, put, select, take} from "redux-saga/effects";
import {getAccountAction} from "./action";
import {getAccountApi} from "../../request/AccountRequest";
import {AppState} from "../store";
import {getToken} from "../../utils";

export function* AccountSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();

        if (getToken() && !state.accountState.account.data) {
            yield call(getAccountWorker);
        }

        if (getAccountAction.trigger.is(action)) {
            yield call(getAccountWorker)
        }
    }
}

function* getAccountWorker() {
    try {
        const state: AppState = yield select();

        if (state.accountState.account.finished && state.accountState.account.data) {
            return
        }

        yield put(getAccountAction.running());
        const response = yield call(getAccountApi);

        yield put(getAccountAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getAccountAction.error({params: {}, error: e}));
    }
}
