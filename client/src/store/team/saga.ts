import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {AddTeams, CreateTeam} from "../../request/TeamApi";
import {
    getAdminTeamsApi,
    getTeamsApi,
    postTeamAdminApi,
    putTeamAdminApi,
    putTeamUpdateAdminApi
} from "../../request/TeamRequest";
import {ADMIN_TEAM_PAGE, TEAMS_URL} from "../../utils";

import {AppState} from "../store";
import {
    getTeamAdminListAction,
    getTeamListAction,
    postTeamAdminCreateAction,
    putTeamAdminAddAction,
    putTeamAdminUpdateAction
} from "./action";

interface Params {
    params: {
        body?: CreateTeam | AddTeams,
        id?: number
    }
}

export function* TeamSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const teamUrlMatch = action.type === LOCATION_CHANGE && TEAMS_URL.match(action.payload.location).isMatched;
        const adminTeamUrlMatch = action.type === LOCATION_CHANGE && ADMIN_TEAM_PAGE.match(action.payload.location).isMatched;


        if (teamUrlMatch && state.teamState.teams) {
            yield call(getTeamWorker, action);
        }


        if (adminTeamUrlMatch) {
            yield call(getTeamAdminWorker);
        }

        if (getTeamListAction.trigger(action)) {
            yield call(getTeamWorker, action, true);
        }

        if (postTeamAdminCreateAction.trigger.is(action)) {
            yield call(CRUDTeamWorker, {params: {body: action.body}}, postTeamAdminApi);
        }

        if (putTeamAdminAddAction.trigger.is(action)) {
            yield call(CRUDTeamWorker, {params: {body: action.body}}, putTeamAdminApi);
        }

        if (putTeamAdminUpdateAction.trigger.is(action)) {
            yield call(CRUDTeamWorker, {params: {body: action.body, id: action.id}}, putTeamUpdateAdminApi);
        }
    }
}

function* getTeamWorker({query}: typeof getTeamListAction.trigger.typeInterface, strictUpdate?: boolean) {
    try {
        if (!query && strictUpdate) return

        yield put(getTeamListAction.running());
        const response = yield call(getTeamsApi, query);

        yield put(getTeamListAction.ok({params: {query}, result: response}));
    } catch (e) {
        yield put(getTeamListAction.error({params: {query}, error: e}));
    }
}

function* getTeamAdminWorker() {
    try {
        yield put(getTeamAdminListAction.running());
        const response = yield call(getAdminTeamsApi);

        yield put(getTeamAdminListAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getTeamAdminListAction.error({params: {}, error: e}));
    }
}

function* CRUDTeamWorker({params}: Params, api: (this: unknown, ...args: any) => Promise<string>) {
    try {
        if (!params.body && !params.id) {
            return
        }

        yield call(api, params);
        yield call(getTeamAdminWorker)
    } catch (e) {
        yield call(getTeamAdminWorker)
    }
}
