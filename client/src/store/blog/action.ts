import {defineApiCallAction} from "../../libs/rd-action-creator";
import {Blog, BlogCreate} from "../../request/BlogApi";

export const getBlogsListAction = defineApiCallAction<{}, { data: Blog[] }, { error: string }>("get-blogs-list");
export const postCrateArticleAction = defineApiCallAction<{ body: BlogCreate }, { data: string }, { error: string }>("post-article",);
export const delArticleAction = defineApiCallAction<{ id: number }, { data: string }, { error: string }>("del-article");
