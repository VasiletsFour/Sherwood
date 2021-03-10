import { Blog } from "../../request/BlogApi";
import { defaultState } from "../defaultState";

export interface BlogState {
    blogs: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: Blog[] | null;
    };
}

export const initialBlogState: BlogState = {
    blogs: defaultState
};
