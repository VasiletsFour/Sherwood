import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, InputGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {AuthTop, FormInput, InputPassword} from "../../";
import {LOGIN_USER} from "../../../store/auth";
import {AppState} from "../../../store/store";

const initialState = {
    email: "",
    password: "",
};

interface Props {
    signUp: () => void;
    close: () => void;
}

export const SignIn = ({ signUp, close }: Props) => {
    const dispatch = useDispatch();
    const login = useSelector((state: AppState) => (state?.authState?.login));
    const [err, setErr] = useState(false)
    const [state, setState] = useState(initialState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (login?.err) return setErr(true)
        if (login?.data) return close()
    })

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
    };

    return (
        <div className="authorization__signIn">
            <AuthTop err={err} setErr={() => setErr(false)} title={"Вxод"} message={login?.err}/>
            <InputGroup>
                <div className="authorization__inputContainer">
                    <FormInput
                        classname="authorization"
                        value={state.email}
                        name="email"
                        onChange={handleInputChange}
                        label="Почта"
                        placeholder="Почта"
                    />
                    <InputPassword
                        classname="authorization"
                        label="Пароль"
                        value={state.password}
                        name="password"
                        placeholder="Пароль"
                        onChange={handleInputChange}
                    />
                    <p onClick={signUp}>Зарегестрироваться</p>
                    <Button variant={"outline-dark"} size={"lg"} className="authorization__sendBtn"
                            onClick={() => handleLogin()}>
                        Войти
                    </Button>
                </div>
            </InputGroup>
        </div>
    );
};
