import React from "react"
import "./UserMenu.scss"
import {FaUser} from 'react-icons/fa';
import {LOGOUT_USER} from "../../store/auth";
import {useDispatch} from "react-redux";

interface Props {
    email: string
    firstname: string,
    surname: string,
    avatar?: string
    close: () => void
}

export const UserMenu = ({firstname, surname, email, avatar, close}: Props) => {
    const dispatch = useDispatch()

    return (
        <div className="userMenu">
            <div className="userMenu__opacity" onClick={() => close()}>
            </div>
            <div className="userMenu__wrapper">
                <div className="userMenu__container">
                    <div className="userMenu__avatarContainer">
                        {!avatar && <FaUser className="userMenu__avatarMissing"/>}
                    </div>
                    <p className="userMenu__userName">{`${firstname} ${surname}`}</p>
                    <span className="userMenu__userEmail">{email}</span>
                </div>
                <div className="userMenu__logoutWrapper">
                    <button className="userMenu__logoutBtn" onClick={() => {
                        dispatch({type: LOGOUT_USER, payload: ""})
                        close()
                    }}>Logout
                    </button>
                </div>
            </div>
        </div>
    )
}