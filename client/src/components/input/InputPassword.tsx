import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./InputPassword.scss";

interface Props {
    classname?: string;
}

export const InputPassword = ({ classname }: Props) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className={`inputPassword ${classname}`}>
            <input type={!showPass ? "password" : "text"} />
            <span onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash /> : <FaEye />}</span>
        </div>
    );
};
