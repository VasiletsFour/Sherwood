import {Action} from "redux";
import {getBlogsListAction} from "./action";
import {BlogState, initialBlogState} from "./state";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType"

export function blogReducer(state: BlogState = initialBlogState as BlogState, action: Action): BlogState {
    // getBlogAction
    if (getBlogsListAction.trigger.is(action)) {
        return {
            ...state, blogs: {...triggerReducer},
        };
    }
    if (getBlogsListAction.running.is(action)) {
        return {
            ...state, blogs: {...runningReducer},
        };
    }
    if (getBlogsListAction.ok.is(action)) {
        return {
            ...state,
            blogs: {
                data: action,
                ...okReducer
            },
        };
    }
    if (getBlogsListAction.error.is(action)) {
        return {
            ...state,
            blogs: {
                error: action,
                ...errorReducer
            },
        };
    }

    return state;
}