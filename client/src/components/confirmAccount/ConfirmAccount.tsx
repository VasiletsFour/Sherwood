import React, {useState} from "react";
import {Spinner} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {ConfirmAgain, InformationBanner} from "../";
import {AppState} from "../../store/store";
import {HOME_URL} from "../../utils";
import "./ConfirmAccount.scss"

export const ConfirmAccount = () => {
    const history = useHistory();
    const {confirm} = useSelector((state: AppState) => ({confirm: state?.authState?.confirm}));
    const [openInput, setOpenInput] = useState(false);

    return (
        <div className={"confirmAccount"}>
            <InformationBanner
                show={!!(confirm && confirm.type !== "Error" && !openInput)}
                title={"Потверждено"}
                text={"Аккаунт готов к работе"}
                btnText={"ОК"}
                click={() => history.push(HOME_URL.urlTemplate)}
            />
            <InformationBanner
                show={!!(confirm && confirm.type === "Error" && !openInput)}
                error={true}
                text={
                    confirm?.message === "Not a token"
                        ? "Произашла ошибка, даные не потверждены"
                        : "Время ожидания вышло, повторно отправте сообщение"
                }
                btnText={"ОК"}
                click={() => {
                    confirm?.message === "Not a token" && history.push(HOME_URL.urlTemplate);
                    confirm?.message === "Token Expired" && setOpenInput(true);
                }}
            />
            {openInput && <ConfirmAgain/>}
            {!confirm && <Spinner animation={"border"} variant={"primary"}/>}
        </div>
    );
};
