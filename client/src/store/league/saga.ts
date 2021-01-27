import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {SCORER_URL, TEAMS_URL, TIME_TABLE_URL, TOURNAMENT_TABLE_URL} from "../../utils/urls";
import {getLeagueListAction} from "./action";
import {getLeagueApi} from "../../request/LeagueRequest";

export function* LeagueSaga() {
    while (true) {
        const action = yield take("*");
        const leagueUrlMatch = action.type === LOCATION_CHANGE && (TEAMS_URL.match(action.payload.location).isMatched || SCORER_URL.match(action.payload.location).isMatched || TIME_TABLE_URL.match(action.payload.location).isMatched || TOURNAMENT_TABLE_URL.match(action.payload.location).isMatched);


        if (leagueUrlMatch) {
            yield call(getLeagueWorker);
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
