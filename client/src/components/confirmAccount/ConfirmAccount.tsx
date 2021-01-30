import React, {useState} from "react";
import {CONFIRM_ACCOUNT_URL, HOME_URL} from "../../utils/urls";
import {useHistory} from "react-router-dom";
import {InformationBanner} from "../banner/informationBanner/InformationBanner";
import {getConfirmAccountApi} from "../../request/AccountRequest";

interface Props {
    location: Location;
}

export const ConfirmAccount = ({location}: Props) => {
    const history = useHistory()
    const token = location.pathname.replace(CONFIRM_ACCOUNT_URL.urlTemplate + "/", "")
    const [error, setError] = useState({error: false, text: ""})
    const [openPopup, setOpenPopup] = useState(false)

    error.text === "" && getConfirmAccountApi(token)
        .then((data) => setError({error: false, text: data}))
        .catch((error) => setError({error: true, text: error.message}))

    return (
        <div>
            {!error.error && error.text !== "" &&
            <InformationBanner title={"Потверждено"} text={"Аккаунт готов к работе"} btnText={"ОК"}
                               click={() => history.push(HOME_URL.urlTemplate)}/>}
            {error.error && error.text !== "" &&
            <InformationBanner error={true}
                               text={error.text === "Not a token" ? "Произашла ошибка, даные не потверждены" : "Время ожидания вышло, повторно отправте сообщение"}
                               btnText={"ОК"}
                               click={() => {
                                   error.text === "Not a token" && history.push(HOME_URL.urlTemplate)
                                   error.text === "Token Expired" && setOpenPopup(true)
                               }}/>}
            {openPopup && <p>work</p>}
        </div>
    )
}