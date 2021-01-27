import React from "react"
import {LeagueMap} from "../leagueMap/LeagueMap";
import "./Scorer.scss"

export const Scorer = () => (
    <div className="scorer">
        <div className="scorer__titleContainer">
            <h1>Бомбардиры</h1>
        </div>
        <LeagueMap>
            <p>Scorer</p>
        </LeagueMap>
    </div>
)