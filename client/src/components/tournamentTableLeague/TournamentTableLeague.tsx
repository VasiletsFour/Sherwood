import React from "react"
import {LeagueMap, TournamentTable} from "../";
import "./TournamentTableLeague.scss"


export const TournamentTableLeague = () => (
    <div className="tournamentTableLeague">
        <h1>Турнирная таблица</h1>
        <LeagueMap><TournamentTable/></LeagueMap>
    </div>
)
