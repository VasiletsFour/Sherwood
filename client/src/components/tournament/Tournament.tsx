import React from "react"
import {LeagueMap, TournamentTable} from "../";
import "./Tournament.scss"


export const Tournament = () => (
    <div className="tournament">
        <div className="tournament__titleContainer">
            <h1>Турнирная таблица</h1>
        </div>
        <LeagueMap><TournamentTable/></LeagueMap>
    </div>
)
