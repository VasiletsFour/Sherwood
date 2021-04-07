import React, {ChangeEvent, useState} from "react";
import {ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {AdminLeagueBody, AdminLeagueHead, AdminTopBlock, Alert, NumberInput} from "../../";
import {LeagueApi, Leagues} from "../../../request/LeagueApi";
import {postLeagueAction, putLeagueAction} from "../../../store/league";
import {AppState} from "../../../store/store";
import "./AdminLeague.scss"

export const AdminLeague = () => {
    const dispatch = useDispatch();
    const {data, finished, loading} = useSelector((state: AppState) => (state.leagueState?.league));
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
            {finished && !loading && data && <div className="adminLeague__wrapper">
                {data.map(({id, name, leagues}: LeagueApi) => <ListGroup className="adminLeague__block" key={page + id}>
                    <AdminLeagueHead
                        name={name}
                        leagues={leagues}
                        id={id}
                        handleClick={(league, id) => handleClick(league, id)}/>
                    <div className="adminLeague__body">
                        {leagues.map((props: Leagues) =>
                            <AdminLeagueBody id={props.id} name={props.name} key={page + props.id + "child"}/>)}
                    </div>
                </ListGroup>)}
            </div>}
        </div>
    );
}

