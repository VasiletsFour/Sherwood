import React, {useState} from "react";
import {Form, InputGroup} from 'react-bootstrap';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {InputProps} from "../InputApi";
import "./InputPassword.scss";

export const InputPassword = ({classname, label, ...props}: InputProps) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <Form className={`${classname}__inputWrapper`}>
            {label && <Form.Label className={`${classname}__inputLabel`}>{label}</Form.Label>}
            <div className={`inputPassword`}>
                <InputGroup>
                    <Form.Control type={`${showPass ? "text" : "password"}`} {...props} />
                    <InputGroup.Prepend>
                        <InputGroup.Text onClick={() => setShowPass(!showPass)}>
                            <span> {showPass ? <FaEyeSlash/> : <FaEye/>}</span>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>
        </Form>
    )
};

