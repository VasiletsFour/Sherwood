import React, {useState} from "react";
import {Button, InputGroup} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {FormInput} from "../";
import {CONFIRM_AGAIN} from "../../store/auth";
import {HOME_URL} from "../../utils";
import "./ConfirmAgain.scss"

export const ConfirmAgain = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState<string | null>(null)

    const handleConfirm = () => {
        email && dispatch({
            type: CONFIRM_AGAIN,
            payload: {email},
        });

        history.push(HOME_URL.urlTemplate)
    };

    return (
        <div className="confirmAgain">
            <InputGroup>
                <div className="confirmAgain__inputContainer">
                    <FormInput
                        classname="confirmAgain"
                        value={email || ""}
                        name="email"
                        onChange={(event => setEmail(event.target.value))}
                        label="Почта"
                        placeholder="Почта"
                    />
                    <hr className="confirmAgain__hr"/>
                    <Button variant={"outline-primary"} size={"lg"} className="confirmAgain__sendBtn"
                            onClick={() => handleConfirm()}>
                        Отправить
                    </Button>
                </div>
            </InputGroup>
        </div>
    );
};
