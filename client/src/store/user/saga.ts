import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {getAdminUserApi} from "../../request/UserRequest";
import {ADMIN_USER_PAGE} from "../../utils";
import {getAdminUserAction} from "./action";

export function* UserSaga() {
    while (true) {
        const action = yield take("*");
        const adminUserUrlMatch: any = action.type === LOCATION_CHANGE && ADMIN_USER_PAGE.match(action.payload.location);

        if (adminUserUrlMatch.isMatched) {
            yield call(getAdminUserWorker);
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
