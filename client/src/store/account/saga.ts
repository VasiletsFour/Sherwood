import { call, put, select, take } from "redux-saga/effects";
import { getAccountApi } from "../../request/AccountRequest";
import { getToken } from "../../utils";
import { AppState } from "../store";
import { getAccountAction } from "./action";

export function* AccountSaga() {
    while (true) {
        const action = yield take("*");

        if (getToken()) {
            yield call(getAccountWorker);
        }

        if (getAccountAction.trigger.is(action)) {
            yield call(getAccountWorker);
        }
    }
}

function* getAccountWorker() {
    try {
        const state: AppState = yield select();

        if (state.accountState.account.data) {
            return;
        }

        yield put(getAccountAction.running());
        const response = yield call(getAccountApi);

        yield put(getAccountAction.ok({ params: {}, result: response }));
    } catch (e) {
        yield put(getAccountAction.error({ params: {}, error: { error: e.message } }));
    }
}
