import React from "react";
import {AddPlus, ChevronDownRight} from "../";

interface Props {
    name: string
    openStatus: boolean
    onClick: () => void
    classname: string
    addBtn?: boolean
    onClickAdd?: (name: string) => void
    text?: string
}

export const NameOpenChild = ({name, openStatus, onClick, classname, addBtn, onClickAdd, text}: Props) => (
    <div className={classname} onClick={onClick}>
        <strong>{name}</strong>
        {addBtn && onClickAdd && text && <AddPlus onClick={onClickAdd} text={text}/>}
        <ChevronDownRight open={openStatus}/>
    </div>
)