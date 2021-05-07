import React from "react";
import {LeagueMap, TeamsTable} from "../";
import "./Teams.scss";

export const Teams = () => (
    <div className="teams">
        <LeagueMap>
            <TeamsTable/>
        </LeagueMap>

    </div>
);
