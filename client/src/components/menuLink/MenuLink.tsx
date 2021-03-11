import {UrlPath} from "rd-url-utils";
import React from "react";
import {Link} from "react-router-dom";
import "./MenuLink.scss"

interface Props {
    page: boolean
    link: UrlPath<{}, {}>
    text: string
}

export const MenuLink = ({page, link, text}: Props) => (
    <li className="menuLink">
        <Link
            className={`menuLink__menuItem ${page && "menuLink__menuItemActivate"}`}
            to={link.urlTemplate}>
            {text}
        </Link>
    </li>

);

