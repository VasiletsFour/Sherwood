import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import history from "../utils/history";
import {all} from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import {blogReducer, BlogSaga, BlogState} from "./blog";
import {leagueReducer, LeagueSaga, LeagueState} from "./league";
import {teamReducer, TeamSaga, TeamState} from "./team"
import {authReducer, AuthSaga, AuthState} from "./auth"

export interface AppState {
    authState: AuthState;
    blogState: BlogState;
    leagueState: LeagueState;
    teamState: TeamState;
    router: any;
}

const composeEnhancers = (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers<AppState>({
    authState: authReducer,
    blogState: blogReducer,
    leagueState: leagueReducer,
    teamState: teamReducer,
    router: connectRouter(history),
});

const rootReducer = (state: AppState | undefined, action: AnyAction) => appReducer(state, action)


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        BlogSaga(),
        LeagueSaga(),
        TeamSaga()
    ]);
}

sagaMiddleware.run(rootSaga);
