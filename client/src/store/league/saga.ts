import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {getLeagueApi} from "../../request/LeagueRequest";
import {ADMIN_LEAGUE_PAGE, SCORER_URL, TEAMS_URL, TIME_TABLE_URL, TOURNAMENT_TABLE_URL} from "../../utils";
import {getLeagueListAction} from "./action";

export function* LeagueSaga() {
    while (true) {
        const action = yield take("*");
        const teamUrlMatch = action.type === LOCATION_CHANGE && TEAMS_URL.match(action.payload.location).isMatched;
        const scoreUrlMatch = action.type === LOCATION_CHANGE && SCORER_URL.match(action.payload.location).isMatched;
        const timeTableUrlMatch =
            action.type === LOCATION_CHANGE && TIME_TABLE_URL.match(action.payload.location).isMatched;
        const tournamentUrlMatch =
            action.type === LOCATION_CHANGE && TOURNAMENT_TABLE_URL.match(action.payload.location).isMatched;
        const adminLeagueUrlMatch =
            action.type === LOCATION_CHANGE && ADMIN_LEAGUE_PAGE.match(action.payload.location).isMatched;

        if (teamUrlMatch || scoreUrlMatch || timeTableUrlMatch || tournamentUrlMatch || adminLeagueUrlMatch) {
            yield call(getLeagueWorker);
        }
    }
}

function* getLeagueWorker() {
    try {
        yield put(getLeagueListAction.running());
        const response = yield call(getLeagueApi);

        yield put(getLeagueListAction.ok({ params: {}, result: response }));
    } catch (e) {
        yield put(getLeagueListAction.error({ params: {}, error: e }));
    }
}
