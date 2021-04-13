import React from "react";
import {useSelector} from "react-redux";
import {LogoType} from "../";
import {AppState} from "../../store/store";
import "./Footer.scss";

export const Footer = () => {
    const {data} = useSelector((state: AppState) => (state?.accountState.account));

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <LogoType classname="footer" isAdmin={data?.role}/>
            </div>
        </footer>
    );
}
