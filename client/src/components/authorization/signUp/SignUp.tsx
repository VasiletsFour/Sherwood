import React from "react"
import {InputPassword} from "../../input/InputPassword";

export const SignUp = () => (
    <div className="authorization__signIn">
        <h1 className="authorization__title">Регестрация</h1>
        <div className="authorization__inputContainer">
            <div className="authorization__inputWrapper">
                <label className="authorization__inputLabel">Почта</label>
                <input className="authorization__input" type="text"/>
            </div>
            <div className="authorization__inputWrapper">
                <label className="authorization__inputLabel">Пароль</label>
                <InputPassword classname="authorization__input"/>
            </div>
            <button className="authorization__sendBtn">Зарегестрироваться</button>
        </div>
    </div>
)