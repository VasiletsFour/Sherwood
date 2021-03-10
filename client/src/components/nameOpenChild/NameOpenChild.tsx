import React from "react";
import {ChevronDownRight} from "../";

interface Props {
    name: string
    openStatus: boolean
    onClick: () => void
    classname: string
}

export const NameOpenChild = ({name, openStatus, onClick, classname}: Props) => (
    <div className={classname} onClick={onClick}>
        <p>{name}</p>
        <ChevronDownRight open={openStatus}/>
    </div>
)