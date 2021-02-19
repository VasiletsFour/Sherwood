import { LOCATION_CHANGE } from "connected-react-router";
import { call, put, select, take } from "redux-saga/effects";
import { delBlogsApi, getBlogsApi, postBlogsApi } from "../../request/BlogRequest";
import { ADMIN_BLOG_PAGE, HOME_URL } from "../../utils";
import { AppState } from "../store";
import { delArticleAction, getBlogsListAction, postCrateArticleAction } from "./action";

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
            yield call(postBlogWorker, action);
        }

        if (delArticleAction.trigger.is(action)) {
            yield call(deleteBlogWorker, action);
        }
    }
}

function* getBlogsWorker() {
    try {
        yield put(getBlogsListAction.running());
        const response = yield call(getBlogsApi);

        yield put(getBlogsListAction.ok({ params: {}, result: response }));
    } catch (e) {
        yield put(getBlogsListAction.error({ params: {}, error: e }));
    }
}

function* postBlogWorker({ body }: typeof postCrateArticleAction.trigger.typeInterface) {
    try {
        if (!body) {
            return;
        }

        yield put(postCrateArticleAction.running());
        const response = yield call(postBlogsApi, body);

        yield call(getBlogsWorker);
        yield put(postCrateArticleAction.ok({ params: { body }, result: response }));
    } catch (e) {
        yield put(postCrateArticleAction.error({ params: { body }, error: e }));
    }
}

function* deleteBlogWorker({ id }: typeof delArticleAction.trigger.typeInterface) {
    try {
        if (!id) {
            return;
        }

        yield put(delArticleAction.running());
        const response = yield call(delBlogsApi, id);

        yield call(getBlogsWorker);
        yield put(delArticleAction.ok({ params: { id }, result: response }));
    } catch (e) {
        yield put(delArticleAction.error({ params: { id }, error: e }));
    }
}
