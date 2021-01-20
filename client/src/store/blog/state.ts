import {Blog} from "../../request/BlogApi";

export interface BlogState {
    blogs: {
        finished: boolean;
        loading: boolean;
        error: string | null;
        data: Blog[] | null;
    };
}

export const initialBlogState: BlogState = {
    blogs: {
        finished: false,
        loading: false,
        error: null,
        data: null,
    }
};
