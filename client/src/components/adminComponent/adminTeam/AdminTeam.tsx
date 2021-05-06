import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {AdminSeasonLeagueList, AdminTeamBottom, AdminTeamName, AdminTopBlock} from "../";
import {AdminCreateBtn, Alert, DropZone, FormInput} from "../../";
import {TeamApi} from "../../../request/TeamApi";
import {getTeamListAction, postTeamAdminCreateAction, putTeamAdminAddAction} from "../../../store/team";
import {dragAndDropDefault, DragAndDropState, handleDragOver} from "../../../utils";
import "./AdminTeam.scss"

interface OpenChild {
    id: number | null
    openStatus: boolean
}

export const AdminTeam = () => {
    const dispatch = useDispatch();
    const [openCreateTeam, setOpenCreateTeam] = useState(false)
    const [createTeam, setCreateTeam] = useState<string>("")
    const [openSeason, setOpenSeason] = useState<OpenChild>({id: null, openStatus: false})
    const [openLeague, setOpenLeague] = useState<OpenChild>({id: null, openStatus: false})
    const [dragAndDrop, setDragAndDrop] = useState<DragAndDropState>(dragAndDropDefault)

    const handleOpenSeason = (id: number, dragOnDrop?: boolean) => setOpenSeason({
        id: id,
        openStatus: openSeason.id === id && !dragOnDrop ? !openSeason.openStatus : true
    })


    const handleOpenLeague = (league_id: number, dragOnDrop?: boolean) => {
        dispatch(getTeamListAction.trigger({query: {league_id}}))

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

        return handleCloseCreate()
    }

    const handleAdd = (teams: TeamApi[]) => {
        const leagueTeam = teams.map((item: TeamApi) => item.id)

        openLeague.id && dispatch(putTeamAdminAddAction.trigger({body: {league_id: openLeague.id, teams: leagueTeam}}))
        setOpenLeague({id: null, openStatus: false})
    }

    return (
        <div className="adminTeam">
            <div className="adminTeam__wrapper">
                <div className="adminTeam__container">
                    <AdminTopBlock title={"Команды"}>
                        <AdminCreateBtn text="Создать команду" onClick={() => handleCloseCreate()}/>
                    </AdminTopBlock>
                    <Alert
                        openStatus={openCreateTeam}
                        title="Команда"
                        text="Создать новую команду"
                        closeClick={() => handleCloseCreate()}
                        btnText="Создать"
                        okClick={() => handleCreate()}>
                        <FormInput
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setCreateTeam(event.target.value)}
                            classname={"adminTeam"} value={createTeam} placeholder={"Название команды"}/>
                    </Alert>
                    <div className="adminTeam__content">
                        <AdminSeasonLeagueList
                            openLeague={openLeague}
                            openSeason={openSeason}
                            handleOpenSeason={(id: number) => handleOpenSeason(id)}
                            handleOpenLeague={(id: number) => handleOpenLeague(id)}
                            onDragOverSeason={(event: React.DragEvent<HTMLDivElement>, id: number) => handleDragOver(event, dragAndDrop.dropDepth, () => handleOpenSeason(id, true))}
                            onDragOverLeague={(event: React.DragEvent<HTMLDivElement>, id: number) => handleDragOver(event, dragAndDrop.dropDepth, () => handleOpenLeague(id, true))}
                        >
                            <div>
                                <AdminTeamName/>
                                <DropZone
                                    classname="adminTeam"
                                    text="drop zone"
                                    dragAndDrop={dragAndDrop}
                                    addTeam={(teams: TeamApi[]) => handleAdd(teams)}
                                    setDragAndDrop={(dragDrop: DragAndDropState) => setDragAndDrop(dragDrop)}/>
                            </div>
                        </AdminSeasonLeagueList>
                    </div>
                </div>
                <AdminTeamBottom setDragAndDrop={(state: DragAndDropState) => setDragAndDrop(state)}/>
            </div>
        </div>
    )
};
