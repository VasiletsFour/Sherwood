import React from "react";
import {useSelector} from "react-redux";
import {LeagueApi, Leagues} from "../../../request/LeagueApi";
import {AppState} from "../../../store/store";
import {NameOpenChild} from "../../nameOpenChild/NameOpenChild";
import "./AdminSeasonLeagueList.scss"

interface OpenChild {
    id: number | null
    openStatus: boolean
}

interface Props {
    openLeague: OpenChild
    openSeason: OpenChild
    handleOpenSeason: (id: number) => void
    handleOpenLeague: (id: number) => void
    children?: JSX.Element
    onDragOverSeason?: (event: React.DragEvent<HTMLDivElement>, id: number) => void
    onDragOverLeague?: (event: React.DragEvent<HTMLDivElement>, id: number) => void
}

export const AdminSeasonLeagueList = (
    {
        handleOpenSeason,
        openSeason,
        handleOpenLeague,
        openLeague,
        children,
        onDragOverSeason,
        onDragOverLeague
    }: Props) => {
    const {leagues} = useSelector((state: AppState) => ({leagues: state.leagueState.league}));

    return (
        <div className="adminSeasonLeagueList">
            {leagues.finished && !leagues.loading && leagues.data && leagues.data.map((item: LeagueApi) => (
                <div
                    key={item.id + "adminTeamPage season"}
                    className="adminSeasonLeagueList__seasonItem"
                    onDragOver={event => onDragOverSeason && onDragOverSeason(event, item.id)}>
                    <NameOpenChild
                        name={item.name}
                        openStatus={openSeason.openStatus && item.id === openSeason.id}
                        onClick={() => handleOpenSeason(item.id)}
                        classname="adminSeasonLeagueList__seasonItemHeader"/>
                    {openSeason.openStatus && item.id === openSeason.id &&
                    <div className="adminSeasonLeagueList__seasonItemBody">
                        {item.leagues.map((league: Leagues) =>
                            (<div
                                    className="adminSeasonLeagueList__leagueItem"
                                    key={league.id + "adminTeamPage league"}>
                                    <div onDragOver={event => onDragOverLeague && onDragOverLeague(event, item.id)}>
                                        <NameOpenChild
                                            name={league.name}
                                            openStatus={openLeague.openStatus && league.id === openLeague.id}
                                            onClick={() => handleOpenLeague(league.id)}
                                            classname="adminSeasonLeagueList__leagueBlock"
                                        />
                                    </div>
                                    {openLeague.openStatus && league.id === openLeague.id && children}
                                </div>
                            ))}
                    </div>}
                </div>))}
        </div>
    )
};


