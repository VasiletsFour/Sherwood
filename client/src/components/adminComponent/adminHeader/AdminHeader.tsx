import React from "react";
import {Navbar} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {LogoType} from "../../";
import {LOGOUT_USER} from "../../../store/auth";
import "./AdminHeader.scss";

export const AdminHeader = () => {
    const dispatch = useDispatch();

    return (
        <header className="adminHeader">
            <Navbar  className="adminHeader__wrapper" bg="dark" variant="dark">
                <LogoType classname="adminHeader" isAdmin="admin"/>
                <Navbar.Brand className="adminHeader__logOut"
                              onClick={() => dispatch({type: LOGOUT_USER, payload: ""})}>Выход</Navbar.Brand>
            </Navbar>
        </header>
    )
};
