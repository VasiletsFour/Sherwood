import React, { ChangeEvent } from "react";
import { FaPen } from "react-icons/fa";
import "./ChangeInput.scss";

export interface Props {
    children: JSX.Element;
    open: boolean;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    name: string;
}

export const ChangeInput = ({ children, open, onClick, ...props }: Props) => (
    <div className="changeInput">
        {!open && children}
        {open && <input className="changeInput__input" type="text" {...props} />}
        <FaPen className="changeInput__penIcon" onClick={() => onClick()} />
    </div>
);
