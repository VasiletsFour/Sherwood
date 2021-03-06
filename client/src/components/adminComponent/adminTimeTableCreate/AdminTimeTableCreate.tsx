import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store/store";
import {getTeamListAction} from "../../../store/team";
import {postTimeTableCreateAdminAction} from "../../../store/timeTable";
import {AdminCreateBtn} from "../../buttons";
import {AdminSeasonLeagueList} from "../adminSeasonLeagueList/AdminSeasonLeagueList";
import {AdminTeamName} from "../adminTeamName/AdminTeamName";
import {AdminTopBlock} from "../adminTopBlock/AdminTopBlock";
import "./AdminTimeTableCreate.scss"

interface OpenChild {
    id: number | null
    openStatus: boolean
}

export const AdminTimeTableCreate = () => {
    const dispatch = useDispatch();
    const {data, finished, loading} = useSelector((state: AppState) => (state.teamState.teams));
    const [openSeason, setOpenSeason] = useState<OpenChild>({id: null, openStatus: false})
    const [openLeague, setOpenLeague] = useState<OpenChild>({id: null, openStatus: false})

    const handleOpenSeason = (id: number) => setOpenSeason({
        id: id,
        openStatus: openSeason.id === id ? !openSeason.openStatus : true
    })


    const handleOpenLeague = (league_id: number,) => {
        dispatch(getTeamListAction.trigger({query: {league_id}}))

        setOpenLeague({
            id: league_id,
            openStatus: openLeague.id === league_id ? !openLeague.openStatus : true
        })
    }

    const createTimeTable = () => openLeague.id && dispatch(postTimeTableCreateAdminAction.trigger({body: {league_id: openLeague.id}}))

    return (
        <div className="adminTimeTableCreate">
            <AdminTopBlock title={"Расписание"} text={"Создать"}/>
            <AdminSeasonLeagueList
                openLeague={openLeague}
                openSeason={openSeason}
                handleOpenSeason={(id: number) => handleOpenSeason(id)}
                handleOpenLeague={(id: number) => handleOpenLeague(id)}
            >
                <div>
                    <AdminTeamName/>
                    {finished && !loading && data && data.length !== 0 &&
                    <div className="adminTimeTableCreate__btnCreateContainer">
                        <AdminCreateBtn text={"Создать рассписание"} onClick={createTimeTable}/>
                    </div>}
                </div>
            </AdminSeasonLeagueList>
        </div>
    )
};


