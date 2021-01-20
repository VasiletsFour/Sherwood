import React from "react"
import {useSelector} from "react-redux";
import {Loader} from "../loader/Loader";
import {AppState} from "../../store/store";
import {LeagueApi} from "../../request/LeagueApi";

export const LeagueMap = () => {
    const {league} = useSelector((state: AppState) => ({league: state?.leagueState.league}));
    console.log(league)
    return (<div>
        {league.finished && !league.loading && league.data ?
            league.data.map((item: LeagueApi) => <p
                key={item.id + "LeagueMap"}>{item.name}</p>) : <Loader/>}
    </div>)
}