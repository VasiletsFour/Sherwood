import React, {ChangeEvent, useState} from "react";
import {FaPlus} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {AdminTopBlock, Alert, DelTimes, NumberInput} from "../../";
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
        setSeasonId(id)
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
            <AdminTopBlock title={"Лиги"}/>
            <Alert
                openStatus={openAddLeague}
                title={"Добавить лигу"}
                text={`В ${addLeague}`}
                closeClick={() => handleClose()}
                okClick={() => addNewLeague()}
                btnText={"Готово"}
            />
            <Alert
                openStatus={openCreateLeague}
                title={"Добавить лиги"}
                text={`Укажите количество лиг`}
                closeClick={() => handleClose()}
                okClick={() => createLeagues()}
                btnText={"Готово"}>
                <NumberInput
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setCountLeague(Number(event.target.value))}
                    max={20}
                    min={1}
                />
            </Alert>
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
                        {item.leagues.map(({name, id}: Leagues) =>
                            <div className="adminLeague__leagueContainer" key={page + id + "child"}>
                                <p className="adminLeague__league">{name} </p>
                                <DelTimes
                                    text={`Вы хотите удалить эту лигу ${name}?`}
                                    onClick={() => dispatch(delLeagueAction.trigger({id}))}
                                    classname="adminLeague__leagueIcon"/>
                            </div>)}
                    </div>
                </div>)}
            </div>}
        </div>
    );
}

