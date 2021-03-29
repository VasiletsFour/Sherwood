import {UrlPath} from "rd-url-utils";
import React from "react";
import {Link} from "react-router-dom";
import "./MenuLink.scss"

interface Props {
    page: boolean
    link: UrlPath<{}, {}>
    text: string
    activateLink: boolean
    children?: JSX.Element
}

export const MenuLink = ({page, link, text, activateLink, children}: Props) => (
    <li className="menuLink">
        {activateLink ? <Link
                className={`menuLink__menuItem ${page && "menuLink__menuItemActivate"}`}
                to={link.urlTemplate}>
                {text}
            </Link> :
            <p className={`menuLink__menuItem ${page && "menuLink__menuItemActivate"}`}>{text} {children && children}</p>}
    </li>

);

