import { LOCATION_CHANGE } from "connected-react-router";
import { call, put, take } from "redux-saga/effects";
import { getBlogsApi } from "../../request/BlogRequest";
import { HOME_URL } from "../../utils";
import { getBlogsListAction } from "./action";

export function* BlogSaga() {
    while (true) {
        const action = yield take("*");
        const homeUrlMatch: any = action.type === LOCATION_CHANGE && HOME_URL.match(action.payload.location);

        if (homeUrlMatch.isMatched && action.payload.isFirstRendering) {
            yield call(getBlogsWorker);
        }
    }
}

function* getBlogsWorker() {
    try {
        yield put(getBlogsListAction.running());
        const response = yield call(getBlogsApi);

        yield put(getBlogsListAction.ok({ params: {}, result: response }));
    } catch (e) {
        yield put(getBlogsListAction.error({ params: {}, error: e }));
    }
}
