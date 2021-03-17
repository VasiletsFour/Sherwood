import React, {useState} from "react";
import {Spinner} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {AdminCreateArticle} from "../";
import {AdminBlogItem, AdminCreateBtn} from "../../";
import {Blog} from "../../../request/BlogApi";
import {AppState} from "../../../store/store";
import "./AdminBlog.scss";

export const AdminBlog = () => {
    const {blogs} = useSelector((state: AppState) => ({blogs: state.blogState?.blogs}));
    const [openArticle, setOpenArticle] = useState(false);

    return (
        <div className="adminBlog">
            <div className="adminBlog__wrapper">
                <AdminCreateBtn text="Создать Новость" onClick={() => setOpenArticle(true)}/>
                <AdminCreateArticle setClose={() => setOpenArticle(false)} openStatus={openArticle}/>
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
                {!blogs.finished && blogs.loading && <Spinner animation={"border"} variant={"light"} size={"sm"} />}
            </div>
        </div>
    );
};
