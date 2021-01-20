import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {HOME_URL} from "../../utils/urls";
import {getBlogsListAction} from "./action";
import {getBlogsApi} from "../../request/BlogRequest";

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

        yield put(getBlogsListAction.ok({params: {}, result: response}));
    } catch (e) {
        console.log(e);
        yield put(getBlogsListAction.error());
    }
}
