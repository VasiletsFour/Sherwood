import React, {ChangeEvent, useState} from "react";
import {FaPlus, FaTimes} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "../../";
import {LeagueApi, Leagues} from "../../../request/LeagueApi";
import {delLeagueAction, postLeagueAction, putLeagueAction} from "../../../store/league";
import {AppState} from "../../../store/store";
import "./AdminLeague.scss"

export const AdminLeague = () => {
    const dispatch = useDispatch();
    const {league} = useSelector((state: AppState) => ({league: state.leagueState?.league}));
    const [openCreateLeague, setOpenCreateLeague] = useState(false)
    const [addLeague, setAddLeague] = useState<string>("")
    const [openAddLeague, setOpenAddLeague] = useState(false)
    const [countLeague, setCountLeague] = useState(2)
    const [seasonId, setSeasonId] = useState<number | null>(null)
    const page = "adminLeague"

    const handleClose = () => {
        setOpenAddLeague(false)
        setOpenCreateLeague(false)
    }

    const handleClick = (leagues: Leagues[], id: number) => {
        if (leagues.length > 0) {
            setOpenAddLeague(true);
            setAddLeague("Лига-" + leagues.length)
            return setSeasonId(id)
        }

        setOpenCreateLeague(true)
        return setSeasonId(id)
    }

    const createLeagues = () => {
        seasonId && dispatch(postLeagueAction.trigger({body: {season_id: seasonId, count: countLeague}}));

        handleClose()
    }

    const addNewLeague = () => {
        seasonId && dispatch(putLeagueAction.trigger({body: {season_id: seasonId, name: addLeague}}));

        handleClose()
    }

    return (
        <div className="adminLeague">
            {openAddLeague && <Alert
                title={"Добавить лигу"}
                text={`В ${addLeague}`}
                closeClick={() => handleClose()}
                okClick={() => addNewLeague()}
                btnText={"Готово"}
            />}
            {openCreateLeague && <Alert
                title={"Добавить лиги"}
                text={`Укажите количество лиг`}
                closeClick={() => handleClose()}
                okClick={() => createLeagues()}
                btnText={"Готово"}
            >{<input className="adminLeague__input" type="number" name="league_count" min={1} max={20}
                     onChange={(event: ChangeEvent<HTMLInputElement>) => setCountLeague(Number(event.target.value))}/>}</Alert>}
            {league.finished &&
            !league.loading &&
            league.data &&
            <div className="adminLeague__wrapper">
                {league.data.map((item: LeagueApi) => <div className="adminLeague__block" key={page + item.id}>
                    <div className="adminLeague__topHead">
                        <h2 className="adminLeague__title">{item.name}</h2>
                        <FaPlus className="adminLeague__topIcon"
                                onClick={() => handleClick(item.leagues, item.id)}/>
                    </div>
                    <div className="adminLeague__body">
                        {item.leagues.map((league: Leagues) => <div className="adminLeague__leagueContainer"
                                                                    key={page + league.id + "child"}>
                            <p className="adminLeague__league">{league.name} </p>
                            <FaTimes className="adminLeague__leagueIcon"
                                     onClick={() => dispatch(delLeagueAction.trigger({id: league.id}))}/>
                        </div>)}
                    </div>
                </div>)}
            </div>}
        </div>
    );
}

