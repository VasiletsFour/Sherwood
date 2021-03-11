import React from "react";
import {TextAreaProps} from "../InputApi";

export const TextArea = ({ classname, label, ...props }: TextAreaProps) => (
    <div className={`${classname}__wrapperArea`}>
        <label className={`${classname}__inputLabel`}>{label}</label>
        <textarea className={`${classname}__textArea`} {...props} />
    </div>
);
