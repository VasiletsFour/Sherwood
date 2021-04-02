import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {PlaceCreate} from "../../request/PlaceApi";
import {delPlaceApi, getPlaceAdminApi, postPlaceAdminApi, putPlaceAdminApi} from "../../request/PlaceRequest";
import {ADMIN_PLACE_PAGE, ADMIN_TIME_TABLE_UPDATE_PAGE} from "../../utils";
import {AppState} from "../store";
import {delPlaceAdminAction, getPlaceAdminAction, postPlaceAdminAction, putPlaceAdminAction} from "./action";

interface Params {
    params: {
        body?: PlaceCreate,
        id?: number
    }
}

export function* PlaceSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const adminPlaceUrlMatch = action.type === LOCATION_CHANGE && ADMIN_PLACE_PAGE.match(action.payload.location).isMatched;
        const adminTimeTableUrlMatch = action.type === LOCATION_CHANGE && ADMIN_TIME_TABLE_UPDATE_PAGE.match(action.payload.location).isMatched;

        if (!state.placeState.placeAdmin.finished && (adminPlaceUrlMatch || adminTimeTableUrlMatch)) {
            yield call(getPlaceAdminWorker);
        }


        if (postPlaceAdminAction.trigger.is(action)) {
            yield call(CRUDPlaceAdminWorker, {params: {body: action.body}}, postPlaceAdminApi);
        }

        if (putPlaceAdminAction.trigger.is(action)) {
            yield call(CRUDPlaceAdminWorker, {params: {id: action.id, body: action.body}}, putPlaceAdminApi);
        }

        if (delPlaceAdminAction.trigger.is(action)) {
            yield call(CRUDPlaceAdminWorker, {params: {id: action.id}}, delPlaceApi);
        }
    }
}

function* getPlaceAdminWorker() {
    try {
        yield put(getPlaceAdminAction.running());
        const response = yield call(getPlaceAdminApi);

        yield put(getPlaceAdminAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getPlaceAdminAction.error({params: {}, error: e}));
    }
}


function* CRUDPlaceAdminWorker({params}: Params, api: (this: unknown, ...args: any[]) => Promise<string>) {
    try {
        if (!params.id && !params.body) return

        yield call(api, params)
        yield call(getPlaceAdminWorker)
    } catch (e) {
        yield call(getPlaceAdminWorker)
    }
}
