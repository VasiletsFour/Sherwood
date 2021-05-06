import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AdminCreateArticle, AdminFilterArticle, AdminTopBlock} from "../";
import {AdminBlogItem, AdminCreateBtn, AdminFilterBtn, NotFoundSearch, SpinnerWrapper} from "../../";
import {BlogData} from "../../../request/BlogApi";
import {AppState} from "../../../store/store";
import "./AdminBlog.scss";

export const AdminBlog = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.blogState?.blogs));
    const [openArticle, setOpenArticle] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="adminBlog">
            <div className="adminBlog__wrapper">
                <AdminTopBlock title="Статьи">
                    <div>
                        <AdminFilterBtn show={!!(data && data.count > 0)} text={"Сортировать статьи"}
                                        onClick={() => setOpenFilter(!openFilter)}/>
                        <AdminCreateBtn text="Создать Новость" onClick={() => setOpenArticle(true)}/>
                    </div>
                </AdminTopBlock>
                <AdminFilterArticle openStatus={openFilter} handleClose={() => setOpenFilter(false)} withDate={true}
                                    withSelect={true}/>
                <AdminCreateArticle setClose={() => setOpenArticle(false)} openStatus={openArticle}/>
                <NotFoundSearch show={(data?.list.length === 0)}/>
                <SpinnerWrapper show={!finished && loading}/>
                {finished && !loading && data && (
                    <div className="adminBlog__container">
                        {data?.list.map((item: BlogData) => (
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
            </div>
        </div>
    );
}
