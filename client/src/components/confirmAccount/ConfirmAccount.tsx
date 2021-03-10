import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {InformationBanner, Loader} from "../";
import {CONFIRM_USER} from "../../store/auth";
import {AppState} from "../../store/store";
import {CONFIRM_ACCOUNT_URL, HOME_URL} from "../../utils";

interface Props {
    location: Location;
}

export const ConfirmAccount = ({location}: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {confirm} = useSelector((state: AppState) => ({confirm: state?.authState?.confirm}));
    const token = location.pathname.replace(CONFIRM_ACCOUNT_URL.urlTemplate + "/", "");
    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        !confirm &&
            dispatch({
                type: CONFIRM_USER,
                payload: token,
            });
    });

    return (
        <div>
            {confirm && confirm.type !== "Error" && (
                <InformationBanner
                    title={"Потверждено"}
                    text={"Аккаунт готов к работе"}
                    btnText={"ОК"}
                    click={() => history.push(HOME_URL.urlTemplate)}
                />
            )}
            {confirm && confirm.type === "Error" && (
                <InformationBanner
                    error={true}
                    text={
                        confirm.message === "Not a token"
                            ? "Произашла ошибка, даные не потверждены"
                            : "Время ожидания вышло, повторно отправте сообщение"
                    }
                    btnText={"ОК"}
                    click={() => {
                        confirm.message === "Not a token" && history.push(HOME_URL.urlTemplate);
                        confirm.message === "Token Expired" && setOpenPopup(true);
                    }}
                />
            )}
            {openPopup && <p>work</p>}
            {!confirm && <Loader />}
        </div>
    );
};
