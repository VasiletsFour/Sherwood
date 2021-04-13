import React from "react";
import {FaUser} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {LOGOUT_USER} from "../../store/auth";
import {ACCOUNT_PAGE, ADMIN_PAGE} from "../../utils";
import "./UserMenu.scss";

interface Props {
    email: string;
    firstname: string;
    surname: string;
    avatar: string;
    role: string;
    close: () => void;
}

export const UserMenu = ({ firstname, surname, email, avatar, role, close }: Props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const url = role === "user" ? ACCOUNT_PAGE : ADMIN_PAGE;

    const handleLogout = () => {
        dispatch({type: LOGOUT_USER, payload: ""});
        return close();
    }

    return (
        <div className="userMenu">
            <div className="userMenu__opacity" onClick={() => close()}/>
            <div className="userMenu__wrapper">
                <div className="userMenu__container" onClick={() => history.push(url.urlTemplate)}>
                    <div className="userMenu__avatarContainer">
                        {!avatar && <FaUser className="userMenu__avatarMissing"/>}
                        {avatar && <img src={avatar} alt="user avatar" className="userMenu__avatar"/>}
                    </div>
                    <p className="userMenu__userName">{`${firstname} ${surname}`}</p>
                    <span className="userMenu__userEmail">{email}</span>
                </div>
                <div className="userMenu__logoutWrapper">
                    <button className="userMenu__logoutBtn" onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </div>
    );
};
