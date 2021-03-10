import {makeDeleteRequest, makeGetRequest, makePostRequest} from "../api/makeRequest";
import {delArticleAction, postCrateArticleAction} from "../store/blog";
import {Blog} from "./BlogApi";

//GET Blogs List
export const getBlogsApi = async (): Promise<Blog[]> => {
    const {data, error, status} = await makeGetRequest("/blogs");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};

//POST new article
export const postBlogsApi = async ({body}: typeof postCrateArticleAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makePostRequest("/admin/blogs", body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};

//DELETE new article
export const delBlogsApi = async ({id}: typeof delArticleAction.trigger.typeInterface): Promise<string> => {
    const {data, error, status} = await makeDeleteRequest(`/admin/blogs/${id}`);

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};
