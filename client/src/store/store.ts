import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import history from "../utils/history";
import {all} from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import {blogReducer, BlogSaga, BlogState} from "./blog";
import {leagueReducer, LeagueSaga, LeagueState} from "./league";

export interface AppState {
    blogState: BlogState;
    leagueState: LeagueState;
    router: any;
}

const composeEnhancers = (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers<AppState>({
    blogState: blogReducer,
    leagueState: leagueReducer,
    router: connectRouter(history),
});

const rootReducer = (state: AppState | undefined, action: AnyAction) => appReducer(state, action)


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

export default function* rootSaga() {
    yield all([
        BlogSaga(),
        LeagueSaga()
    ]);
}

sagaMiddleware.run(rootSaga);
