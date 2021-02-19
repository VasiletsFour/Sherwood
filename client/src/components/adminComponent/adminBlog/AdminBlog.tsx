import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AdminBlogItem, Loader } from "../../";
import { Blog } from "../../../request/BlogApi";
import { AppState } from "../../../store/store";
import { AdminCreateArticle } from "../adminCreateArticle/AdminCreateArticle";
import "./AdminBlog.scss";

export const AdminBlog = () => {
    const { blogs } = useSelector((state: AppState) => ({ blogs: state.blogState?.blogs }));
    const [openArticle, setOpenArticle] = useState(false);

    return (
        <div className="adminBlog">
            <div className="adminBlog__wrapper">
                <div className="adminBlog__btnContainer">
                    <button className="adminBlog__btn" onClick={() => setOpenArticle(true)}>
                        Создать Новость
                    </button>
                </div>
                {openArticle && <AdminCreateArticle setClose={() => setOpenArticle(false)} />}
                {blogs.finished && !blogs.loading && blogs.data && (
                    <div className="adminBlog__container">
                        {blogs.data.map((item: Blog) => (
                            <AdminBlogItem
                                key={item.id + "AdminBlogAdmin"}
                                id={item.id}
                                date={item.date}
                                title={item.title}
                                tags={item.tags}
                                text={item.text}
                            />
                        ))}
                    </div>
                )}
                {!blogs.finished && blogs.loading && <Loader color="white" />}
            </div>
        </div>
    );
};
