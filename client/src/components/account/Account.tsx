import React from "react";
import {Spinner} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {UserAvatar} from "../";
import {AppState} from "../../store/store";
import "./Account.scss";

export const Account = () => {
    const {finished, data, loading} = useSelector((state: AppState) => (state?.accountState.account));

    return (
        <div className="account">
            {finished && !loading && data ? (
                <div className="account__info">
                    <div className="account__wrapper">
                        <UserAvatar avatar={data.avatar}/>
                        <div className="account__nameBlock">
                            <h1 className="account__fullName">
                                {data.firstname} {data.surname}
                            </h1>
                            <p className="account__email">{data.email}</p>
                        </div>
                    </div>
                    {data.b_day && <p>День рождения: {data.b_day}</p>}
                    {data.number && <p>Имя Игрока: {data.player_id}</p>}
                </div>
            ) : (
                <Spinner animation={"border"} variant={'primary'} size={"sm"}/>
            )}
        </div>
    );
};
