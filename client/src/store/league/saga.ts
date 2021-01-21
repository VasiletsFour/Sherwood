import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {TIME_TABLE_URL, TOURNAMENT_TABLE_URL} from "../../utils/urls";
import {getLeagueListAction} from "./action";
import {getLeagueApi} from "../../request/LeagueRequest";

export function* LeagueSaga() {
    while (true) {
        const action = yield take("*");
        const leagueUrlMatch = action.type === LOCATION_CHANGE && (TIME_TABLE_URL.match(action.payload.location).isMatched || TOURNAMENT_TABLE_URL.match(action.payload.location).isMatched);

        if (leagueUrlMatch) {
            yield call(getLeagueWorker);
        }
    }
}

function* getLeagueWorker() {
    try {
        yield put(getLeagueListAction.running());
        const response = yield call(getLeagueApi);

        yield put(getLeagueListAction.ok({params: {}, result: {data: response}}));
    } catch (e) {
        console.log(e);
        yield put(getLeagueListAction.error());
    }
}
