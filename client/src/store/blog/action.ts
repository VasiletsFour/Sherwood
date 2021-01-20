import {Blog} from "../../request/BlogApi";
import {defineApiCallAction} from "../../libs/rd-action-creator";

export const getBlogsListAction = defineApiCallAction<{}, { data: Blog[] }, { error: string }>(
    "get-blogs-list"
);