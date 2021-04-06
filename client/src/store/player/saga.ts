import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {PlayerBody, PlayerUpdate} from "../../request/PlayerApi";
import {delAdminPlayerApi, getAdminPlayerApi, postAdminPlayerApi, putAdminPlayerApi} from "../../request/PlayerRequest";
import {ADMIN_PLAYER_PAGE} from "../../utils";
import {AppState} from "../store";
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
        const state: AppState = yield select();
        const adminPlayerUrlMatch = action.type === LOCATION_CHANGE && ADMIN_PLAYER_PAGE.match(action.payload.location).isMatched;

        if (adminPlayerUrlMatch && !state.playerState.adminPlayer.data) {
            yield call(getPlayerAdminWorker);
        }

        if (postAdminPlayerAction.trigger.is(action)) {
            yield call(CRUDPlayerAdminWorker, {params: {body: action.body}}, postAdminPlayerApi);
        }

        if (putAdminPlayerAction.trigger.is(action)) {
            yield call(CRUDPlayerAdminWorker, {params: {body: action.body, id:action.id}}, putAdminPlayerApi);
        }

        if (delAdminPlayerAction.trigger.is(action)) {
            yield call(CRUDPlayerAdminWorker, {params: {id: action.id}}, delAdminPlayerApi);
        }
    }
}

function* getPlayerAdminWorker() {
    try {
        yield put(getAdminPlayerListAction.running());
        const response = yield call(getAdminPlayerApi);

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