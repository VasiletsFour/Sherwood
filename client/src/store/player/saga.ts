import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {PlayerAdminQuery, PlayerBody, PlayerUpdate} from "../../request/PlayerApi";
import {delAdminPlayerApi, getAdminPlayerApi, postAdminPlayerApi, putAdminPlayerApi} from "../../request/PlayerRequest";
import {ADMIN_PLAYER_PAGE} from "../../utils";
import {delAdminPlayerAction, getAdminPlayerListAction, postAdminPlayerAction, putAdminPlayerAction} from "./action";

interface Params {
    params: {
        body?: PlayerBody | PlayerUpdate,
        id?: number
    }
}

export function* PlayerSaga() {
    while (true) {
        const action = yield take("*");
        const adminPlayerUrlMatch = action.type === LOCATION_CHANGE && ADMIN_PLAYER_PAGE.match(action.payload.location).isMatched;

        if (adminPlayerUrlMatch) {
            yield call(getPlayerAdminWorker);
        }

        if (getAdminPlayerListAction.trigger.is(action)) {
            yield call(getPlayerAdminWorker, action.query);
        }

        if (postAdminPlayerAction.trigger.is(action)) {
            yield call(CRUDPlayerAdminWorker, {params: {body: action.body}}, postAdminPlayerApi);
        }

        if (putAdminPlayerAction.trigger.is(action)) {
            yield call(CRUDPlayerAdminWorker, {params: {body: action.body, id: action.id}}, putAdminPlayerApi);
        }

        if (delAdminPlayerAction.trigger.is(action)) {
            yield call(CRUDPlayerAdminWorker, {params: {id: action.id}}, delAdminPlayerApi);
        }
    }
}

function* getPlayerAdminWorker(query?: PlayerAdminQuery) {
    try {
        yield put(getAdminPlayerListAction.running());
        const response = yield call(getAdminPlayerApi, query);

        yield put(getAdminPlayerListAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getAdminPlayerListAction.error({params: {}, error: e}));
    }
}


function* CRUDPlayerAdminWorker({params}: Params, api: (this: unknown, ...args: any[]) => Promise<string>) {
    try {
        if (!params.id && !params.body) return

        yield call(api, params)
        yield call(getPlayerAdminWorker)
    } catch (e) {
        yield call(getPlayerAdminWorker)
    }
}