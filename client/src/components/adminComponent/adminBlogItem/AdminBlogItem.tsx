import React, {ChangeEvent, useState} from "react";
import {Card} from 'react-bootstrap';
import {FaPen, FaTimes} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {ChangeInput, SelectTags, TagsMap} from "../../";
import {Blog} from "../../../request/BlogApi";
import {delArticleAction} from "../../../store/blog";
import {timeStampToDate} from "../../../utils";
import "./AdminBlogItem.scss";

export const AdminBlogItem = ({title, text, date, tags, id}: Blog) => {
    const dipatch = useDispatch();
    const [state, setState] = useState({title: title, text: text, tags: new Set(tags)});
    const [changeTitle, setChangeTitle] = useState(false);
    const [changeTags, setChangeTags] = useState(false);
    const [changeText, setChangeText] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

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
        <Card className="adminBlogItem">
            <Card.Header className="adminBlogItem__container">
                <ChangeInput
                    name="title"
                    value={state.title}
                    open={changeTitle}
                    onChange={(event) => handleInputChange(event)}
                    onClick={() => setChangeTitle(!changeTitle)}>
                    <h2>{state.title}</h2>
                </ChangeInput>
                <FaTimes className="adminBlogItem__icon" onClick={() => dipatch(delArticleAction.trigger({id}))}/>
            </Card.Header>
            <Card.Body className="adminBlogItem__container">
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
                            <SelectTags handleSelectAdd={(event) => handleSelectAdd(event)}/>
                        ) : (
                            <TagsMap handleSelectDel={(item: string) => handleSelectDel(item)} tags={state.tags}/>
                        )}
                    </div>
                )}
                <FaPen onClick={() => setChangeTags(!changeTags)}/>
            </Card.Body>
            <Card.Footer><span className="text-muted">{timeStampToDate(date)}</span></Card.Footer>
        </Card>
    );
};
