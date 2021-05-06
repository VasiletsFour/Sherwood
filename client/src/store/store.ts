import {connectRouter, routerMiddleware} from "connected-react-router";
import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import history from "../utils/hisotry/history";
import {accountReducer, AccountSaga, AccountState} from "./account";
import {authReducer, AuthSaga, AuthState} from "./auth";
import {blogReducer, BlogSaga, BlogState} from "./blog";
import {leagueReducer, LeagueSaga, LeagueState} from "./league";
import {matchReducer, MatchSaga, MatchState} from "./match"
import {placeReducer, PlaceSaga, PlaceState} from "./place";
import {playerReducer, PlayerSaga, PlayerState} from "./player";
import {refereeReducer, RefereeSaga, RefereeState} from "./referee";
import {resultReducer, ResultSaga, ResultState} from "./result"
import {seasonReducer, SeasonSaga, SeasonState} from "./season";
import {teamReducer, TeamSaga, TeamState} from "./team";
import {timeTableReducer, TimeTableSaga, TimeTableState} from "./timeTable"
import {tournamentTableReducer, TournamentTableSaga, TournamentTableState} from "./tournamentTable";
import {userReducer, UserSaga, UserState} from "./user";

export interface AppState {
    accountState: AccountState;
    authState: AuthState;
    blogState: BlogState;
    leagueState: LeagueState;
    seasonState: SeasonState;
    teamState: TeamState;
    userState: UserState;
    refereeState: RefereeState;
    playerState: PlayerState;
    timeTableState: TimeTableState;
    placeState: PlaceState;
    resultState: ResultState;
    tournamentTableState: TournamentTableState;
    matchState: MatchState;
    router: any;
}

const composeEnhancers = (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers<AppState>({
    accountState: accountReducer,
    authState: authReducer,
    blogState: blogReducer,
    leagueState: leagueReducer,
    seasonState: seasonReducer,
    teamState: teamReducer,
    userState: userReducer,
    refereeState: refereeReducer,
    playerState: playerReducer,
    timeTableState: timeTableReducer,
    placeState: placeReducer,
    resultState: resultReducer,
    tournamentTableState: tournamentTableReducer,
    matchState: matchReducer,
    router: connectRouter(history)
});

const rootReducer = (state: AppState | undefined, action: AnyAction) => appReducer(state, action);

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

export default function* rootSaga() {
    yield all([
        AccountSaga(),
        UserSaga(),
        AuthSaga(),
        BlogSaga(),
        LeagueSaga(),
        SeasonSaga(),
        RefereeSaga(),
        PlayerSaga(),
        TeamSaga(),
        TimeTableSaga(),
        PlaceSaga(),
        ResultSaga(),
        TournamentTableSaga(),
        MatchSaga()
    ]);
}

sagaMiddleware.run(rootSaga);
