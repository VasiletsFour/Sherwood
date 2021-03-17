import React from "react";
import {DelTimes, UpdatePen} from "../../icon";

interface Props {
    id: number
    index?: number
    title: string
    text: string
    name: string
    handleUpdate: (body: { name: string }) => void
    handleDelete: (id: number) => void
    classname: string
}

export const AdminUpdateDelete = ({id, index, name, handleUpdate, handleDelete, title, text, classname}: Props) => (
    <div className={`${classname}__wrapper`}>
        <p>{(index === null || index !== undefined) && <span>{(index + 1).toString()})</span>}{name}</p>
        <UpdatePen
            title={title}
            classname={`${classname}__updatePen`}
            onClick={body => handleUpdate(body)}
            previousValue={name}
        />
        <DelTimes
            classname={`${classname}__delTimes`}
            onClick={() => handleDelete(id)}
            text={text}/>
    </div>
);

