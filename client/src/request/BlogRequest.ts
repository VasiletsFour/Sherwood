import { makeGetRequest } from "../api/makeRequest";
import { Blog } from "./BlogApi";

//GET Blogs List
export const getBlogsApi = async (): Promise<Blog[]> => {
    const { data, error, status } = await makeGetRequest("/blogs");

    if (status === 200) {
        return data;
    }

    throw new Error(error);
};
