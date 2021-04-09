import React, {useState} from "react";
import {Spinner} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {AdminCreateArticle, AdminFilterArticle, AdminTopBlock} from "../";
import {AdminBlogItem, AdminCreateBtn, AdminFilterBtn} from "../../";
import {Blog} from "../../../request/BlogApi";
import {AppState} from "../../../store/store";
import "./AdminBlog.scss";

export const AdminBlog = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.blogState?.blogs));
    const [openArticle, setOpenArticle] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="adminBlog">
            <div className="adminBlog__wrapper">
                <AdminTopBlock title={"Статьи"}>
                    <div>
                        <AdminFilterBtn text={"Сортировать статьи"} onClick={() => setOpenFilter(!openFilter)}/>
                        <AdminCreateBtn text="Создать Новость" onClick={() => setOpenArticle(true)}/>
                    </div>
                </AdminTopBlock>
                <AdminFilterArticle openStatus={openFilter} handleClose={() => setOpenFilter(false)} withDate={true}
                                    withSelect={true}/>
                <AdminCreateArticle setClose={() => setOpenArticle(false)} openStatus={openArticle}/>
                {finished && !loading && data && (
                    <div className="adminBlog__container">
                        {data.map((item: Blog) => (
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
                {finished && loading && <Spinner animation={"border"} variant={"light"} size={"sm"}/>}
            </div>
        </div>
    );
}
