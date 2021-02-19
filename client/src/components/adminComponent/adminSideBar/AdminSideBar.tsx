import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import {
    ADMIN_BLOG_PAGE,
    ADMIN_LEAGUE_PAGE,
    ADMIN_PLAYER_PAGE,
    ADMIN_SEASON_PAGE,
    ADMIN_TEAM_PAGE,
} from "../../../utils";
import "./AdminSideBar.scss";

export const AdminSideBar = () => {
    const [close, setClose] = useState(false);
    const history = useHistory();
    const isAdminBlogPage = ADMIN_BLOG_PAGE.match(history.location).isMatched;
    const isAdminSeasonPage = ADMIN_SEASON_PAGE.match(history.location).isMatched;
    const isAdminLeaguePage = ADMIN_LEAGUE_PAGE.match(history.location).isMatched;
    const isAdminTeamPage = ADMIN_TEAM_PAGE.match(history.location).isMatched;
    const isAdminPlayerPage = ADMIN_PLAYER_PAGE.match(history.location).isMatched;
    const staticUrl = false;

    return (
        <aside className={`adminSideBar ${close && "adminSideBarClose"}`}>
            <div
                className={`adminSideBar__chevronContainer ${close && "adminSideBarClose__chevronContainer"}`}
                onClick={() => setClose(!close)}>
                <FaChevronRight className="adminSideBar__chevron" />
            </div>
            {!close && (
                <div className="adminSideBar__wrapper">
                    <h1 className="adminSideBar__title">Meню</h1>
                    <div className="adminSideBar__container">
                        <ul>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        isAdminBlogPage && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_BLOG_PAGE.urlTemplate}>
                                    Статьи
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        isAdminSeasonPage && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_SEASON_PAGE.urlTemplate}>
                                    Сезон
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        isAdminLeaguePage && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_LEAGUE_PAGE.urlTemplate}>
                                    Лиги
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        isAdminTeamPage && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_TEAM_PAGE.urlTemplate}>
                                    Команды
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        isAdminPlayerPage && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_PLAYER_PAGE.urlTemplate}>
                                    Игроки
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        staticUrl && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_BLOG_PAGE.urlTemplate}>
                                    Расписание
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        staticUrl && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_BLOG_PAGE.urlTemplate}>
                                    Результаты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`adminSideBar__menuItem ${
                                        staticUrl && "adminSideBar__menuItemActivate"
                                    }`}
                                    to={ADMIN_BLOG_PAGE.urlTemplate}>
                                    Судьи
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </aside>
    );
};
