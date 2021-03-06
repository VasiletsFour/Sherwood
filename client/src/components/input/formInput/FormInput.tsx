import React from "react";
import {Form} from 'react-bootstrap';
import {InputProps} from "../InputApi";

export const FormInput = ({ classname, label, ...props }: InputProps) => (
    <Form className={`${classname}__inputWrapper`}>
        {label && <Form.Label className={`${classname}__inputLabel`}>{label}</Form.Label>}
        <Form.Control type="text"
                      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => event.keyCode === 13 && event.preventDefault()} {...props} />
    </Form>
);
