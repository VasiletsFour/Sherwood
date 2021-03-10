import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, select, take} from "redux-saga/effects";
import {BlogCreate} from "../../request/BlogApi";
import {delBlogsApi, getBlogsApi, postBlogsApi} from "../../request/BlogRequest";
import {ADMIN_BLOG_PAGE, HOME_URL} from "../../utils";
import {AppState} from "../store";
import {delArticleAction, getBlogsListAction, postCrateArticleAction} from "./action";

interface Params {
    params: {
        body?: BlogCreate,
        id?: number
    }
}

export function* BlogSaga() {
    while (true) {
        const action = yield take("*");
        const state: AppState = yield select();
        const homeUrlMatch: any = action.type === LOCATION_CHANGE && HOME_URL.match(action.payload.location);
        const adminBlogUrlMatch: any =
            action.type === LOCATION_CHANGE && ADMIN_BLOG_PAGE.match(action.payload.location);

        if ((homeUrlMatch.isMatched || adminBlogUrlMatch) && action.payload.isFirstRendering && state.blogState.blogs) {
            yield call(getBlogsWorker);
        }

        if (postCrateArticleAction.trigger.is(action)) {
            yield call(CRUDBlogWorker, {params: {body: action.body}}, postBlogsApi);
        }

        if (delArticleAction.trigger.is(action)) {
            yield call(CRUDBlogWorker, {params: {id: action.id}}, delBlogsApi);
        }
    }
}

function* getBlogsWorker() {
    try {
        yield put(getBlogsListAction.running());
        const response = yield call(getBlogsApi);

        yield put(getBlogsListAction.ok({params: {}, result: response}));
    } catch (e) {
        yield put(getBlogsListAction.error({params: {}, error: e}));
    }
}

function* CRUDBlogWorker({params}: Params, api: (this: unknown, ...args: any[]) => Promise<string>) {
    try {
        if (!params.id && !params.body) {
            return;
        }

        yield call(api, params);
        yield call(getBlogsWorker);
    } catch (e) {
        yield call(getBlogsWorker);
    }
}

