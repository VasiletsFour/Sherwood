import { LOCATION_CHANGE } from "connected-react-router";
import { call, put, select, take } from "redux-saga/effects";
import { getTeamsApi } from "../../request/TeamRequest";
import { TEAMS_URL } from "../../utils";
import { AppState } from "../store";
import { getTeamListAction } from "./action";

export function* TeamSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const teamUrlMatch = action.type === LOCATION_CHANGE && TEAMS_URL.match(action.payload.location).isMatched;

        if (teamUrlMatch && state.teamState.teams) {
            yield call(getTeamWorker, action);
        }

        if (getTeamListAction.trigger(action)) {
            yield call(getTeamWorker, action);
        }
    }
}

function* getTeamWorker({ query }: typeof getTeamListAction.trigger.typeInterface) {
    try {
        yield put(getTeamListAction.running());
        const response = yield call(getTeamsApi, query);

        yield put(getTeamListAction.ok({ params: { query }, result: response }));
    } catch (e) {
        yield put(getTeamListAction.error({ params: { query }, error: e }));
    }
}
