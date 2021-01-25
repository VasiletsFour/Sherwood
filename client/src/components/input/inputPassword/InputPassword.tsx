import React, {useState} from "react"
import {InputProps} from "../InputApi"
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import "./InputPassword.scss"

export const InputPassword = ({classname, label, ...props}: InputProps) => {
    const [showPass, setShowPass] = useState(false)

    return (
        <div className={`${classname}__inputWrapper`}>
            <label className={`${classname}__inputLabel`}>{label}</label>
            <div className={`inputPassword ${classname}__input`}>
                <input type={!showPass ? "password" : "text"}
                       {...props}/>
                <span onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash/> : <FaEye/>}</span>
            </div>
        </div>
    )
}