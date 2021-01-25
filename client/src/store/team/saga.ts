import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {TEAMS_URL} from "../../utils/urls";
import {getTeamListAction} from "./action";
import {getTeamsApi} from "../../request/TeamRequest";

export function* TeamSaga() {
    while (true) {
        const action = yield take("*");
        const teamUrlMatch = action.type === LOCATION_CHANGE && TEAMS_URL.match(action.payload.location).isMatched;

        if (teamUrlMatch) {
            yield call(getTeamWorker);
        }
    }
}

function* getTeamWorker() {
    try {
        yield put(getTeamListAction.running());
        const response = yield call(getTeamsApi);

        yield put(getTeamListAction.ok({params: {}, result: response}));
    } catch (e) {
        console.log(e);
        yield put(getTeamListAction.error());
    }
}
