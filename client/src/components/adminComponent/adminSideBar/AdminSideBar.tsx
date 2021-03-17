import React, {useState} from "react";
import {Nav, Navbar} from 'react-bootstrap';
import {FaChevronRight} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import {
    ADMIN_BLOG_PAGE,
    ADMIN_LEAGUE_PAGE,
    ADMIN_PLAYER_PAGE,
    ADMIN_REFEREE_PAGE,
    ADMIN_SEASON_PAGE,
    ADMIN_TEAM_PAGE,
    ADMIN_USER_PAGE,
} from "../../../utils";
import {MenuLink} from "../../menuLink/MenuLink";
import "./AdminSideBar.scss";

export const AdminSideBar = () => {
    const [close, setClose] = useState(false);
    const history = useHistory();
    const isAdminBlogPage = ADMIN_BLOG_PAGE.match(history.location).isMatched;
    const isAdminSeasonPage = ADMIN_SEASON_PAGE.match(history.location).isMatched;
    const isAdminLeaguePage = ADMIN_LEAGUE_PAGE.match(history.location).isMatched;
    const isAdminTeamPage = ADMIN_TEAM_PAGE.match(history.location).isMatched;
    const isAdminPlayerPage = ADMIN_PLAYER_PAGE.match(history.location).isMatched;
    const isAdminUserPage = ADMIN_USER_PAGE.match(history.location).isMatched;
    const isAdminRefereePage = ADMIN_REFEREE_PAGE.match(history.location).isMatched;
    const staticUrl = false;

    return (
        <aside className={`adminSideBar ${close && "adminSideBarClose"}`}>
            <div
                className={`adminSideBar__chevronContainer ${close && "adminSideBarClose__chevronContainer"}`}
                onClick={() => setClose(!close)}>
                <FaChevronRight className="adminSideBar__chevron" />
            </div>
            {!close && (
                <Navbar className="adminSideBar__wrapper" bg="dark" variant={"dark"}>
                    <Navbar.Brand className="adminSideBar__title">Meню</Navbar.Brand>
                    <Nav className="adminSideBar__container">
                        <MenuLink page={isAdminBlogPage} link={ADMIN_BLOG_PAGE} text="Статьи"/>
                        <MenuLink page={isAdminSeasonPage} link={ADMIN_SEASON_PAGE} text="Сезон"/>
                        <MenuLink page={isAdminLeaguePage} link={ADMIN_LEAGUE_PAGE} text="Лиги"/>
                        <MenuLink page={isAdminTeamPage} link={ADMIN_TEAM_PAGE} text="Команды"/>
                        <MenuLink page={isAdminPlayerPage} link={ADMIN_PLAYER_PAGE} text="Игроки"/>
                        <MenuLink page={staticUrl} link={ADMIN_BLOG_PAGE} text="Расписание"/>
                        <MenuLink page={staticUrl} link={ADMIN_BLOG_PAGE} text="Результаты"/>
                        <MenuLink page={isAdminUserPage} link={ADMIN_USER_PAGE} text="Юзери"/>
                        <MenuLink page={isAdminRefereePage} link={ADMIN_REFEREE_PAGE} text="Судьи"/>
                    </Nav>
                </Navbar>
            )}
        </aside>
    );
};
