import React from "react";
import {Spinner} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {UserAvatar} from "../";
import {AppState} from "../../store/store";
import "./Account.scss";

export const Account = () => {
    const {account} = useSelector((state: AppState) => ({account: state?.accountState.account}));

    return (
        <div className="account">
            {account.finished && !account.loading && account.data ? (
                <div className="account__info">
                    <div className="account__wrapper">
                        <UserAvatar avatar={account.data.avatar}/>
                        <div className="account__nameBlock">
                            <h1 className="account__fullName">
                                {account.data.firstname} {account.data.surname}
                            </h1>
                            <p className="account__email">{account.data.email}</p>
                        </div>
                    </div>
                    {account.data.b_day && <p>День рождения: {account.data.b_day}</p>}
                    {account.data.number && <p>Имя Игрока: {account.data.player_id}</p>}
                </div>
            ) : (
                <Spinner animation={"border"} variant={'primary'} size={"sm"}/>
            )}
        </div>
    );
};
