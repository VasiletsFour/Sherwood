import React from "react";
import {Form} from 'react-bootstrap';
import {TextAreaProps} from "../InputApi";

export const TextArea = ({ classname, label, ...props }: TextAreaProps) => (
    <Form className={`${classname}__wrapperArea`}>
        <Form.Label className={`${classname}__inputLabel`}>{label}</Form.Label>
        <Form.Control as={"textarea"} {...props} />
    </Form>
);
