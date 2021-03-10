import {connectRouter, routerMiddleware} from "connected-react-router";
import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import history from "../utils/history";
import {accountReducer, AccountSaga, AccountState} from "./account";
import {userReducer, UserSaga, UserState} from "./user";
import {authReducer, AuthSaga, AuthState} from "./auth";
import {blogReducer, BlogSaga, BlogState} from "./blog";
import {leagueReducer, LeagueSaga, LeagueState} from "./league";
import {seasonReducer, SeasonSaga, SeasonState} from "./season";
import {teamReducer, TeamSaga, TeamState} from "./team";

export interface AppState {
    accountState: AccountState;
    authState: AuthState;
    blogState: BlogState;
    leagueState: LeagueState;
    seasonState: SeasonState;
    teamState: TeamState;
    userState: UserState;
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
    router: connectRouter(history),
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
        TeamSaga()]);
}

sagaMiddleware.run(rootSaga);
