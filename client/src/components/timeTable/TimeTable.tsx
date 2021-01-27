import React from "react"
import {LeagueMap} from "../leagueMap/LeagueMap";
import "./TimeTable.scss"

export const TimeTable = () => (
    <div className="timeTable">
        <div className="timeTable__titleContainer">
            <h1>Расписание</h1>
        </div>
        <LeagueMap>
            <p>TimeTable</p>
        </LeagueMap>
    </div>
)