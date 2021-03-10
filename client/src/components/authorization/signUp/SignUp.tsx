import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {FormInput, InputPassword} from "../../";
import {SIGNUP_NEW_USER} from "../../../store/auth";

interface Props {
    close: () => void;
}

const initialState = {
    firstname: "",
    surname: "",
    email: "",
    password: "",
};

export const SignUp = ({ close }: Props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleRequest = () => {
        if (state.password !== confirmPassword) {
            return alert("err");
        }

        state &&
            dispatch({
                type: SIGNUP_NEW_USER,
                payload: state,
            });

        close();
    };

    return (
        <div className="authorization__signIn">
            <h1 className="authorization__title">Регестрация</h1>
            <div className="authorization__inputContainer">
                <FormInput
                    classname="authorization"
                    value={state.email}
                    name="email"
                    onChange={handleInputChange}
                    label="Почта"
                    placeholder="Почта"
                />
                <FormInput
                    classname="authorization"
                    value={state.firstname}
                    name="firstname"
                    onChange={handleInputChange}
                    label="Имя"
                    placeholder="Имя"
                />
                <FormInput
                    classname="authorization"
                    value={state.surname}
                    name="surname"
                    onChange={handleInputChange}
                    label="Фамилия"
                    placeholder="Фамилия"
                />
                <InputPassword
                    classname="authorization"
                    label="Пароль"
                    value={state.password}
                    name="password"
                    placeholder="Пароль"
                    onChange={handleInputChange}
                />
                <InputPassword
                    classname="authorization"
                    label="Повторите пароль"
                    value={confirmPassword}
                    placeholder="Повтарите пароль"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
                />
                <button className="authorization__sendBtn" onClick={() => handleRequest()}>
                    Зарегестрироваться
                </button>
            </div>
        </div>
    );
};
