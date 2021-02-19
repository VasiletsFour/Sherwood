import React, { ChangeEvent, useState } from "react";
import { FaPen, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ChangeInput, SelectTags, TagsMap } from "../../";
import { Blog } from "../../../request/BlogApi";
import { delArticleAction } from "../../../store/blog";
import { timeStampToDate } from "../../../utils";
import "./AdminBlogItem.scss";

export const AdminBlogItem = ({ title, text, date, tags, id }: Blog) => {
    const dipatch = useDispatch();
    const [state, setState] = useState({ title: title, text: text, tags: new Set(tags) });
    const [changeTitle, setChangeTitle] = useState(false);
    const [changeTags, setChangeTags] = useState(false);
    const [changeText, setChangeText] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSelectAdd = (event: ChangeEvent<HTMLSelectElement>) => {
        state.tags.add(event.target.value);

        handleSelect();
        setChangeTags(!changeTags);
    };

    const handleSelectDel = (tag: string) => {
        state.tags.delete(tag);

        handleSelect();
    };

    const handleSelect = () => {
        setState({
            ...state,
            tags: state.tags,
        });
    };

    return (
        <div className="adminBlogItem">
            <FaTimes className="adminBlogItem__icon" onClick={() => dipatch(delArticleAction.trigger({ id }))} />
            <ChangeInput
                name="title"
                value={state.title}
                open={changeTitle}
                onChange={(event) => handleInputChange(event)}
                onClick={() => setChangeTitle(!changeTitle)}>
                <h2 className="adminBlogItem__title">{state.title}</h2>
            </ChangeInput>
            <ChangeInput
                value={state.text}
                open={changeText}
                onChange={(event) => handleInputChange(event)}
                onClick={() => setChangeText(!changeText)}
                name="text">
                <p className="adminBlogItem__text">{state.text}</p>
            </ChangeInput>
            {tags && (
                <div className="adminBlogItem__tagsContainer">
                    {changeTags ? (
                        <SelectTags handleSelectAdd={(event) => handleSelectAdd(event)} />
                    ) : (
                        <TagsMap handleSelectDel={(item: string) => handleSelectDel(item)} tags={state.tags} />
                    )}
                </div>
            )}
            <FaPen onClick={() => setChangeTags(!changeTags)} />
            <span>{timeStampToDate(date)}</span>
        </div>
    );
};
