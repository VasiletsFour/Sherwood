import React from "react"
import {InputPassword} from "../../input/InputPassword";

interface Props{
    signUp:()=>void
}

export const SignIn = ({signUp}:Props) => (
    <div className="authorization__signIn">
        <h1 className="authorization__title">Вxод</h1>
        <div className="authorization__inputContainer">
            <div className="authorization__inputWrapper">
                <label className="authorization__inputLabel">Почта</label>
                <input className="authorization__input" type="text"/>
            </div>
            <div className="authorization__inputWrapper">
                <label className="authorization__inputLabel">Пароль</label>
                <InputPassword classname="authorization__input"/>
            </div>
            <p onClick={signUp}>Зарегестрироваться</p>
            <button className="authorization__sendBtn">Войти</button>
        </div>
    </div>
)