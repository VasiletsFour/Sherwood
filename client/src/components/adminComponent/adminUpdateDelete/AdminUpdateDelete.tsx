import React from "react";
import {ListGroup} from 'react-bootstrap';
import {DelTimes, UpdatePen} from "../../icon";
import "./AdminUpdateDelete.scss"

interface Props {
    id: number
    index?: number
    title: string
    text: string
    name: string
    handleUpdate: (name: string) => void
    handleDelete: (id: number) => void
}

export const AdminUpdateDelete = ({id, index, name, handleUpdate, handleDelete, title, text,}: Props) => (
    <ListGroup.Item>
        <div className={`adminUpdateDelete`}>
            <p>{(index === null || index !== undefined) && <span>{(index + 1).toString()})</span>}{name}</p>
            <div className={`adminUpdateDelete__iconContainer`}>
                <UpdatePen
                    title={title}
                    classname={`adminUpdateDelete__updatePen`}
                    onClick={name => handleUpdate(name)}
                    previousValue={name}
                />
                <DelTimes
                    classname={`adminUpdateDelete__delTimes`}
                    onClick={() => handleDelete(id)}
                    text={text}/>
            </div>
        </div>
    </ListGroup.Item>
);

