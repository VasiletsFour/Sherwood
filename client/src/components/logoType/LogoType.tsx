import React from "react";
import {useHistory} from "react-router-dom";
import {AccountRoleType} from "../../request/AccountApi";
import {ACCOUNT_PAGE, ADMIN_PAGE, HOME_URL} from "../../utils";
import "./LogoType.scss";

interface Props {
    classname: string;
    isAdmin?: AccountRoleType
}

export const LogoType = ({classname, isAdmin}: Props) => {
    const history = useHistory();
    const page = isAdmin === "admin" ? ADMIN_PAGE : isAdmin === "user" ? ACCOUNT_PAGE : HOME_URL
    const handleLogo = () => history.push(page.urlTemplate);

    return (
        <div className={`${classname}__logotypeContainer logoType`} onClick={() => handleLogo()}>
            <p className={`${classname}__logotype logoType__logo`}>Elite</p>
        </div>
    );
};
