import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {UserAdminUpdate} from "../../request/UserApi";
import {getAdminUserApi, putAdminUserApi} from "../../request/UserRequest";
import {ADMIN_USER_PAGE} from "../../utils";
import {getAdminUserAction, putAdminUserAction} from "./action";

interface Params {
    params: {
        body?: UserAdminUpdate
        id?: number
    }
}

export function* UserSaga() {
    while (true) {
        const action = yield take("*");
        const adminUserUrlMatch = action.type === LOCATION_CHANGE && ADMIN_USER_PAGE.match(action.payload.location).isMatched;

        if (adminUserUrlMatch) {
            yield call(getAdminUserWorker);
        }

        if (putAdminUserAction.trigger.is(action)) {
            yield call(CRUDUserWorker, {params: {id: action.id, body: action.body}}, putAdminUserApi);
        }
    }
}

function* getAdminUserWorker() {
    try {
        yield put(getAdminUserAction.running());
        const response = yield call(getAdminUserApi);

        yield put(getAdminUserAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getAdminUserAction.error({params: {}, error: e}));
    }
}

function* CRUDUserWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) return

        yield call(api, params);
    } catch (e) {
        yield call(getAdminUserWorker)
    }
}