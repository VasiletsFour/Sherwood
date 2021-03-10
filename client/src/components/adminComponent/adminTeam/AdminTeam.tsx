import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AdminTeamBottom} from "../";
import {AdminCreateBtn, DropZone, NameOpenChild, UpdatePen} from "../../";
import {LeagueApi, Leagues} from "../../../request/LeagueApi";
import {CreateTeam, TeamApi} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {
    getTeamListAction,
    postTeamAdminCreateAction,
    putTeamAdminAddAction,
    putTeamAdminUpdateAction
} from "../../../store/team";
import {dragAndDropDefault, DragAndDropState, handleDragOver} from "../../../utils";
import "./AdminTeam.scss"

interface OpenChild {
    id: number | null
    openStatus: boolean
}

export const AdminTeam = () => {
    const dispatch = useDispatch();
    const {leagues} = useSelector((state: AppState) => ({leagues: state.leagueState.league}));
    const {teams} = useSelector((state: AppState) => ({teams: state.teamState.teams}));
    const [openCreateTeam, setOpenCreateTeam] = useState(false)
    const [createTeam, setCreateTeam] = useState<string>("")
    const [openSeason, setOpenSeason] = useState<OpenChild>({id: null, openStatus: false})
    const [openLeague, setOpenLeague] = useState<OpenChild>({id: null, openStatus: false})
    const [dragAndDrop, setDragAndDrop] = useState<DragAndDropState>(dragAndDropDefault)

    const handleOpenSeason = (id: number, dragOnDrop?: boolean) => {
        setOpenSeason({
            id: id,
            openStatus: openSeason.id === id && !dragOnDrop ? !openSeason.openStatus : true
        })
    }

    const handleOpenLeague = (league_id: number, dragOnDrop?: boolean) => {
        dispatch(getTeamListAction.trigger({query: {league_id: league_id}}))

        setOpenLeague({
            id: league_id,
            openStatus: openLeague.id === league_id && !dragOnDrop ? !openLeague.openStatus : true
        })
    }

    const handleCloseCreate = () => {
        !openCreateTeam && setCreateTeam("")
        setOpenCreateTeam(!openCreateTeam)
    }

    const handleCreate = () => {
        dispatch(postTeamAdminCreateAction.trigger({body: {name: createTeam}}))
        handleCloseCreate()
    }

    const handleAdd = (teams: TeamApi[]) => {
        const leagueTeam = teams.map((item: TeamApi) => item.id)

        openLeague.id && dispatch(putTeamAdminAddAction.trigger({body: {league_id: openLeague.id, teams: leagueTeam}}))
        setOpenLeague({id: null, openStatus: false})
    }

    return (
        <div className="adminTeam">
            <AdminCreateBtn text="Создать команду" onClick={() => handleCloseCreate()}/>
            {openCreateTeam && <div className="adminTeam__createTeamContainer">
                <input className="adminTeam__crateTeamInput" type="text" value={createTeam}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setCreateTeam(event.target.value)}/>
                <button className="adminTeam__createTeamBtn" onClick={() => handleCreate()}>Создать</button>
            </div>}
            <div className="adminTeam__content">
                {leagues.finished && !leagues.loading && leagues.data && leagues.data.map((item: LeagueApi) => (
                    <div
                        key={item.id + "adminTeamPage season"}
                        className="adminTeam__seasonItem"
                        onDragOver={event => handleDragOver(event, dragAndDrop.dropDepth, () => handleOpenSeason(item.id, true))}>
                        <NameOpenChild
                            name={item.name}
                            openStatus={openSeason.openStatus && item.id === openSeason.id}
                            onClick={() => handleOpenSeason(item.id)}
                            classname="adminTeam__seasonItemHeader"/>
                        {openSeason.openStatus && item.id === openSeason.id &&
                        <div className="adminTeam__seasonItemBody">
                            {item.leagues.map((league: Leagues) =>
                                (<div className="adminTeam__leagueItem"
                                      key={league.id + "adminTeamPage league"}>
                                        <div
                                            onDragOver={event => handleDragOver(event, dragAndDrop.dropDepth, () => handleOpenLeague(league.id, true))}>
                                            <NameOpenChild
                                                name={league.name}
                                                openStatus={openLeague.openStatus && league.id === openLeague.id}
                                                onClick={() => handleOpenLeague(league.id)}
                                                classname="adminTeam__leagueBlock"
                                            /></div>
                                        {openLeague.openStatus && league.id === openLeague.id && teams.data && teams.finished && !teams.loading &&
                                        <div>
                                            {teams.data.map((team: TeamApi, int: number) =>
                                                <div key={team.id + "AdminTeamPageTeamsTeams"}>
                                                    <p>
                                                        <span>{int + 1})</span>{team.name}</p>
                                                    <UpdatePen
                                                        classname="adminTeam__updatePen"
                                                        onClick={(body: CreateTeam) => dispatch(putTeamAdminUpdateAction.trigger({
                                                            id: team.id,
                                                            body
                                                        }))}
                                                        id={team.id}
                                                        previousValue={team.name}
                                                    />
                                                </div>)}
                                        </div>}
                                        {openLeague.openStatus && league.id === openLeague.id &&
                                        <DropZone
                                            classname="adminTeam"
                                            text="drop zone"
                                            dragAndDrop={dragAndDrop}
                                            addTeam={(teams: TeamApi[]) => handleAdd(teams)}
                                            setDragAndDrop={(dragDrop: DragAndDropState) => setDragAndDrop(dragDrop)}/>}
                                    </div>
                                ))}
                        </div>}
                    </div>))}
            </div>
            <AdminTeamBottom
                setDragAndDrop={(state: DragAndDropState) => setDragAndDrop(state)}
            />
        </div>
    )
};
