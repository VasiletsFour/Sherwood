import React, {useState} from "react";
import {Spinner} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {AdminCreateArticle, AdminFilterBlock, AdminTopBlock} from "../";
import {AdminBlogItem, AdminCreateBtn, AdminFilterBtn} from "../../";
import {Blog} from "../../../request/BlogApi";
import {getBlogsListAction} from "../../../store/blog";
import {AppState} from "../../../store/store";
import "./AdminBlog.scss";

export const AdminBlog = () => {
    const {blogs} = useSelector((state: AppState) => ({blogs: state.blogState?.blogs}));
    const [openArticle, setOpenArticle] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="adminBlog">
            <div className="adminBlog__wrapper">
                <AdminTopBlock title={"Статьи"}>
                    <div>
                        <AdminFilterBtn text={"Сортировать статьи"} onClick={() => setOpenFilter(!openFilter)}
                                        show={!!(blogs?.data && blogs.data.length > 0)}/>
                        <AdminCreateBtn text="Создать Новость" onClick={() => setOpenArticle(true)}/>
                    </div>
                </AdminTopBlock>
                <AdminFilterBlock openStatus={openFilter} handleClose={() => setOpenFilter(false)} withDate={true}
                                  withSelect={true} action={getBlogsListAction}/>
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
                {!blogs.finished && blogs.loading && <Spinner animation={"border"} variant={"light"} size={"sm"}/>}
            </div>
        </div>
    );
}
