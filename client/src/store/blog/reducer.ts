import { Action } from "redux";
import { errorReducer, okReducer, runningReducer, triggerReducer } from "../reducerType";
import { delArticleAction, getBlogsListAction, postCrateArticleAction } from "./action";
import { BlogState, initialBlogState } from "./state";

export function blogReducer(state: BlogState = initialBlogState as BlogState, action: Action): BlogState {
    // getBlogAction
    if (getBlogsListAction.trigger.is(action)) {
        return {
            ...state,
            blogs: { ...triggerReducer },
        };
    }
    if (getBlogsListAction.running.is(action)) {
        return {
            ...state,
            blogs: { ...runningReducer },
        };
    }
    if (getBlogsListAction.ok.is(action)) {
        const { data } = action["result"];

        return {
            ...state,
            blogs: { data, ...okReducer },
        };
    }
    if (getBlogsListAction.error.is(action)) {
        const { error } = action["error"];

        return {
            ...state,
            blogs: { error, ...errorReducer },
        };
    }

    // postBlogAction
    if (postCrateArticleAction.trigger.is(action)) {
        return {
            ...state,
            create: { ...triggerReducer },
        };
    }
    if (postCrateArticleAction.running.is(action)) {
        return {
            ...state,
            create: { ...runningReducer },
        };
    }
    if (postCrateArticleAction.ok.is(action)) {
        const { data } = action["result"];

        return {
            ...state,
            create: { data, ...okReducer },
        };
    }
    if (postCrateArticleAction.error.is(action)) {
        const { error } = action["error"];

        return {
            ...state,
            create: { error, ...errorReducer },
        };
    }

    // delBlogAction
    if (delArticleAction.trigger.is(action)) {
        return {
            ...state,
            delete: { ...triggerReducer },
        };
    }
    if (postCrateArticleAction.running.is(action)) {
        return {
            ...state,
            delete: { ...runningReducer },
        };
    }
    if (postCrateArticleAction.ok.is(action)) {
        const { data } = action["result"];

        return {
            ...state,
            delete: { data, ...okReducer },
        };
    }
    if (postCrateArticleAction.error.is(action)) {
        const { error } = action["error"];

        return {
            ...state,
            delete: { error, ...errorReducer },
        };
    }

    return state;
}
