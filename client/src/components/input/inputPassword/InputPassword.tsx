import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {InputProps} from "../InputApi";
import "./InputPassword.scss";

export const InputPassword = ({classname, label, ...props}: InputProps) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <Form className={`${classname}__inputWrapper`}>
            {label && <Form.Label className={`${classname}__inputLabel`}>{label}</Form.Label>}
            <div className={`inputPassword`}>
                <Form.Control type={`${showPass ? "text" : "password"}`} {...props} />
                <span onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash/> : <FaEye/>}</span>
            </div>
        </Form>
    )
};

