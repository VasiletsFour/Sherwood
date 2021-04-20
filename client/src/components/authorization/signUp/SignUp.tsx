import React, {ChangeEvent, useState} from "react";
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {AuthTop, FormInput, InputPassword} from "../../";
import {SIGNUP_NEW_USER} from "../../../store/auth";
import {AppState} from "../../../store/store";

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
    const signUp = useSelector((state: AppState) => (state?.authState?.signUp));
    const [info, setInfo] = useState(false)
    const [err, setErr] = useState(false)
    const [state, setState] = useState(initialState);
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleRequest = () => {
        if (state.password !== confirmPassword) return setErr(true);

        state &&
        dispatch({
            type: SIGNUP_NEW_USER,
            payload: state,
        });

        if (signUp?.err) return setErr(true)

        return setInfo(true)
    };

    return (
        <div className="authorization__signIn">
            <AuthTop err={err} setErr={() => setErr(false)} title={"Регестрация"} message={signUp?.err} info={info} setInfo={()=>close()}/>
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
                <Button variant={"outline-dark"} size={"lg"} className="authorization__sendBtn"
                        onClick={() => handleRequest()}>
                    Зарегестрироваться
                </Button>
            </div>
        </div>
    );
};
