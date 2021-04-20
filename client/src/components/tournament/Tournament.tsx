import React from "react";
import {LeagueMap, TournamentTable} from "../";
import "./Tournament.scss";

export const Tournament = () => (
    <div className="tournament">
        <LeagueMap>
            <TournamentTable />
        </LeagueMap>
    </div>
);
