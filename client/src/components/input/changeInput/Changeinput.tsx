import React, {ChangeEvent} from "react";
import {Form} from "react-bootstrap";
import {FaPen} from "react-icons/fa";
import "./ChangeInput.scss";

export interface Props {
    children: JSX.Element;
    open: boolean;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    type: "textarea" | "text";
    rows?: number;
    cols?: number;
    name: string;
}

export const ChangeInput = ({ children, open, onClick, ...props }: Props) => (
    <div className="changeInput">
        {!open && children}
        {open && <Form.Control as={"textarea"} {...props} />}
        <FaPen className="changeInput__penIcon" onClick={onClick}/>
    </div>
);
