import React from "react";
import {Form} from 'react-bootstrap';
import {DateProps} from "../InputApi";

export const InputDate = ({label, classname, ...props}: DateProps) => (
    <div className={`${classname}__inputWrapper`}>
        {label && <Form.Label className={`${classname}__inputLabel`}>{label}</Form.Label>}
        <input type="date" className={`${classname}__inputDate`} {...props}/>
    </div>
)


