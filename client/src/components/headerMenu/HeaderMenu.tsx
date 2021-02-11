import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
    APPLICATION_LIST_PAGE,
    COMMITTEE_PAGE,
    MATCH_RESULT_PAGE,
    SCORER_URL,
    TEAMS_URL,
    TIME_TABLE_URL,
    TOURNAMENT_TABLE_URL,
} from "../../utils";
import "./HeaderMenu.scss";

export const HeaderMenu = () => {
    const history = useHistory();
    const isTimeTablePage = TIME_TABLE_URL.match(history.location).isMatched;
    const isTournamentPage = TOURNAMENT_TABLE_URL.match(history.location).isMatched;
    const isTeamPage = TEAMS_URL.match(history.location).isMatched;
    const isScorePage = SCORER_URL.match(history.location).isMatched;
    const isMatchResultPage = MATCH_RESULT_PAGE.match(history.location).isMatched;
    const isApplicationListPage = APPLICATION_LIST_PAGE.match(history.location).isMatched;
    const isCommitteePage = COMMITTEE_PAGE.match(history.location).isMatched;

    return (
        <ul className="headerMenu">
            <li>
                <Link
                    className={`headerMenu__menuItem ${isTimeTablePage && "headerMenu__menuItemActivate"}`}
                    to={TIME_TABLE_URL.urlTemplate}>
                    Расписание
                </Link>
            </li>
            <li>
                <Link
                    className={`headerMenu__menuItem ${isMatchResultPage && "headerMenu__menuItemActivate"}`}
                    to={MATCH_RESULT_PAGE.urlTemplate}>
                    Результаты матчей
                </Link>
            </li>
            <li>
                <Link
                    className={`headerMenu__menuItem ${isTournamentPage && "headerMenu__menuItemActivate"}`}
                    to={TOURNAMENT_TABLE_URL.urlTemplate}>
                    Турнирная таблица
                </Link>
            </li>
            <li>
                <Link
                    className={`headerMenu__menuItem ${isTeamPage && "headerMenu__menuItemActivate"}`}
                    to={TEAMS_URL.urlTemplate}>
                    Команды
                </Link>
            </li>
            <li>
                <Link
                    className={`headerMenu__menuItem ${isScorePage && "headerMenu__menuItemActivate"}`}
                    to={SCORER_URL.urlTemplate}>
                    Бомбардиры
                </Link>
            </li>
            <li>
                <Link
                    className={`headerMenu__menuItem ${isApplicationListPage && "headerMenu__menuItemActivate"}`}
                    to={APPLICATION_LIST_PAGE.urlTemplate}>
                    Заявочный лист
                </Link>
            </li>
            <li>
                <Link
                    className={`headerMenu__menuItem ${isCommitteePage && "headerMenu__menuItemActivate"}`}
                    to={COMMITTEE_PAGE.urlTemplate}>
                    Комитет
                </Link>
            </li>
        </ul>
    );
};
