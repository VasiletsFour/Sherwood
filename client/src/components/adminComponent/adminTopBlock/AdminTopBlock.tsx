import React from "react";
import "./AdminTopBlock.scss"

interface Props {
    title: string
    text?: string
    children?: JSX.Element
}

export const AdminTopBlock = ({title, text, children}: Props) => (
    <div className="adminTopBlock">
        <h1 className="adminTopBlock__topTitle">{title}{text &&
        <span className="adminTopBlock__topText">/{text}</span>}</h1>
        {children && <div className="adminTopBlock__topBtnContainer">
            {children}
        </div>}
    </div>
);

