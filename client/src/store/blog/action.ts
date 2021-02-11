import { defineApiCallAction } from "../../libs/rd-action-creator";
import { Blog } from "../../request/BlogApi";

export const getBlogsListAction = defineApiCallAction<{}, { data: Blog[] }, { error: string }>("get-blogs-list");
