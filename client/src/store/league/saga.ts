import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {CreateLeagues, UpdateLeagues} from "../../request/LeagueApi";
import {delLeagueApi, getLeagueApi, postLeagueApi, putLeagueApi} from "../../request/LeagueRequest";
import {
    ADMIN_LEAGUE_PAGE,
    ADMIN_TEAM_PAGE,
    ADMIN_TIME_TABLE_CREATE_PAGE,
    SCORER_URL,
    TEAMS_URL,
    TIME_TABLE_URL,
    TOURNAMENT_TABLE_URL
} from "../../utils";
import {AppState} from "../store";
import {delLeagueAction, getLeagueListAction, postLeagueAction, putLeagueAction} from "./action";

interface Params {
    params: {
        body?: CreateLeagues | UpdateLeagues,
        id?: number
    }
}

export function* LeagueSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const teamUrlMatch = action.type === LOCATION_CHANGE && TEAMS_URL.match(action.payload.location).isMatched;
        const scoreUrlMatch = action.type === LOCATION_CHANGE && SCORER_URL.match(action.payload.location).isMatched;
        const timeTableUrlMatch =
            action.type === LOCATION_CHANGE && TIME_TABLE_URL.match(action.payload.location).isMatched;
        const tournamentUrlMatch =
            action.type === LOCATION_CHANGE && TOURNAMENT_TABLE_URL.match(action.payload.location).isMatched;
        const adminLeagueUrlMatch =
            action.type === LOCATION_CHANGE && ADMIN_LEAGUE_PAGE.match(action.payload.location).isMatched;
        const adminTeamUrlMatch =
            action.type === LOCATION_CHANGE && ADMIN_TEAM_PAGE.match(action.payload.location).isMatched;
        const adminTimeTableUrlMatch =
            action.type === LOCATION_CHANGE && ADMIN_TIME_TABLE_CREATE_PAGE.match(action.payload.location).isMatched;

        const urlMatch = teamUrlMatch || scoreUrlMatch || timeTableUrlMatch || tournamentUrlMatch || adminLeagueUrlMatch || adminTeamUrlMatch || adminTimeTableUrlMatch

        if (urlMatch && !state.leagueState.league.data) {
            yield call(getLeagueWorker);
        }


        if (postLeagueAction.trigger.is(action)) {
            yield call(CRUDLeagueAdminWorker, {params: {body: action.body}}, postLeagueApi);
        }

        if (putLeagueAction.trigger.is(action)) {
            yield call(CRUDLeagueAdminWorker, {params: {body: action.body}}, putLeagueApi);
        }

        if (delLeagueAction.trigger.is(action)) {
            yield call(CRUDLeagueAdminWorker, {params: {id: action.id}}, delLeagueApi);
        }
    }
}

function* getLeagueWorker() {
    try {
        yield put(getLeagueListAction.running());
        const response = yield call(getLeagueApi);

        yield put(getLeagueListAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getLeagueListAction.error({params: {}, error: e}));
    }
}


function* CRUDLeagueAdminWorker({params}: Params, api: (this: unknown, ...args: any[]) => Promise<string>) {
    try {
        if (!params.id && !params.body) return

        yield call(api, params)
        yield call(getLeagueWorker)
    } catch (e) {
        yield call(getLeagueWorker)
    }
}
