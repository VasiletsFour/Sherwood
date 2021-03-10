import React from "react";
import {useDispatch} from "react-redux";
import {LogoType} from "../../";
import {LOGOUT_USER} from "../../../store/auth";
import "./AdminHeader.scss";

export const AdminHeader = () => {
    const dispatch = useDispatch();

    return (
        <header className="adminHeader">
            <LogoType classname="adminHeader" isAdmin="admin"/>
            <h3 className="adminHeader__logOut" onClick={() => dispatch({type: LOGOUT_USER, payload: ""})}>Выход</h3>
        </header>
    )
};
