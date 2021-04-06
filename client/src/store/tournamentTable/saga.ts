import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {getTournamentApi} from "../../request/TournamentTableRequest";
import {TOURNAMENT_TABLE_URL} from "../../utils";
import {getTournamentTableAction} from "./action";

export function* TournamentTableSaga() {
    while (true) {
        const action = yield take("*");
        const tournamentTableUrlMatch = action.type === LOCATION_CHANGE && TOURNAMENT_TABLE_URL.match(action.payload.location).isMatched;

        if (tournamentTableUrlMatch) {
            yield call(getTournamentTableWorker);
        }
    }
}

function* getTournamentTableWorker() {
    try {
        yield put(getTournamentTableAction.running());
        const response = yield call(getTournamentApi);

        yield put(getTournamentTableAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getTournamentTableAction.error({params: {}, error: e}));
    }
}
