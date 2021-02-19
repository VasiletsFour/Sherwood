import React from "react";
import {LogoType} from "../../logoType/LogoType";
import "./AdminHeader.scss";

export const AdminHeader = () => (
    <header className="adminHeader">
        <LogoType classname="adminHeader" isAdmin="admin"/>
    </header>
);
