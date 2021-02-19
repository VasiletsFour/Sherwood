import { makeDeleteRequest, makeGetRequest, makePostRequest } from "../api/makeRequest";
import { Blog, BlogCreate } from "./BlogApi";

//GET Blogs List
export const getBlogsApi = async (): Promise<Blog[]> => {
    const { data, error, status } = await makeGetRequest("/blogs");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};

//POST new article
export const postBlogsApi = async (body: BlogCreate): Promise<string> => {
    const { data, error, status } = await makePostRequest("/admin/blogs", body);

    if (status === 201) {
        return data;
    }

    throw new Error(error);
};

//DELETE new article
export const delBlogsApi = async (id: number): Promise<string> => {
    const { data, error, status } = await makeDeleteRequest(`/admin/blogs/${id}`);

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};
