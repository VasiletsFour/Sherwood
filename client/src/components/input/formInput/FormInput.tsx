import React from "react";
import { InputProps } from "../InputApi";

export const FormInput = ({ classname, label, ...props }: InputProps) => (
    <div className={`${classname}__inputWrapper`}>
        <label className={`${classname}__inputLabel`}>{label}</label>
        <input className={`${classname}__input`} type="text" {...props} />
    </div>
);
