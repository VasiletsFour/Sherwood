import {Action} from "redux";
import {errorReducer, okReducer, runningReducer, triggerReducer} from "../reducerType";
import {getBlogsListAction} from "./action";
import {BlogState, initialBlogState} from "./state";

export function blogReducer(state: BlogState = initialBlogState as BlogState, action: Action): BlogState {
    // getBlogAction
    if (getBlogsListAction.trigger.is(action)) {
        return {
            ...state,
            blogs: {...triggerReducer},
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

    return state;
}
