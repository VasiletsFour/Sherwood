import { Blog } from "../../request/BlogApi";
import { defaultState } from "../defaultState";

export interface BlogState {
    blogs: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: Blog[] | null;
    };
    create: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: string | null;
    };
    delete: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: string | null;
    };
}

export const initialBlogState: BlogState = {
    blogs: defaultState,
    create: defaultState,
    delete: defaultState,
};
