import React from "react";
import {useHistory} from "react-router-dom";
import {
    APPLICATION_LIST_PAGE,
    COMMITTEE_PAGE,
    MATCH_RESULT_PAGE,
    SCORER_URL,
    TEAMS_URL,
    TIME_TABLE_URL,
    TOURNAMENT_TABLE_URL,
} from "../../utils";
import {MenuLink} from "../menuLink/MenuLink";
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
            <MenuLink activateLink={true} page={isTimeTablePage} link={TIME_TABLE_URL} text="Расписание"/>
            <MenuLink activateLink={true} page={isMatchResultPage} link={MATCH_RESULT_PAGE} text="Результаты матчей"/>
            <MenuLink activateLink={true} page={isTournamentPage} link={TOURNAMENT_TABLE_URL} text="Турнирная таблица"/>
            <MenuLink activateLink={true} page={isTeamPage} link={TEAMS_URL} text="Команды"/>
            <MenuLink activateLink={true} page={isScorePage} link={SCORER_URL} text="Бомбардиры"/>
            <MenuLink activateLink={true} page={isApplicationListPage} link={APPLICATION_LIST_PAGE}
                      text="Заявочный лист"/>
            <MenuLink activateLink={true} page={isCommitteePage} link={COMMITTEE_PAGE} text="Комитет"/>
        </ul>
    );
};
