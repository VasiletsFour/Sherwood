import {call, put, select} from "redux-saga/effects";
import {getAccountAction} from "./action";
import {getAccountApi} from "../../request/AccountRequest";
import {AppState} from "../store";
import {getToken} from "../../utils/storage";

export function* AccountSaga() {
    while (true) {
        const state: AppState = yield select();

        if (getToken() && !state.accountState.account.finished) {
            yield call(getAccountWorker);
        }
    }
}

function* getAccountWorker() {
    try {
        const state: AppState = yield select();

        if (state.accountState.account.finished) {
            return
        }

        yield put(getAccountAction.running());
        const response = yield call(getAccountApi);

        yield put(getAccountAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getAccountAction.error({params: {}, error: e}));
    }
}
