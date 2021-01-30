import React, {ChangeEvent, useState} from "react"
import {InputPassword} from "../../input/inputPassword/InputPassword";
import {FormInput} from "../../input/formInput/FormInput";
import {useDispatch} from "react-redux";
import {LOGIN_USER} from "../../../store/auth";

const initialState = {
    email: "",
    password: ""
}

interface Props {
    signUp: () => void
}

export const SignIn = ({signUp}: Props) => {
    const dispatch = useDispatch()
    const [state, setState] = useState(initialState)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleLogin = () => {
        state && dispatch({
            type: LOGIN_USER,
            payload: state,
        });
    }
    return (
        <div className="authorization__signIn">
            <h1 className="authorization__title">Вxод</h1>
            <div className="authorization__inputContainer">
                <FormInput classname="authorization" value={state.email}
                           name="email"
                           onChange={handleInputChange}
                           label="Почта" placeholder="Почта"/>
                <InputPassword classname="authorization" label="Пароль" value={state.password}
                               name="password"
                               placeholder="Пароль"
                               onChange={handleInputChange}/>
                <p onClick={signUp}>Зарегестрироваться</p>
                <button className="authorization__sendBtn" onClick={() => handleLogin()}>Войти</button>
            </div>
        </div>
    )
}