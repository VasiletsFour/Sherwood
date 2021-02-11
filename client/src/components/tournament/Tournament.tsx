import React from "react";
import { LeagueMap, PageTitle, TournamentTable } from "../";
import "./Tournament.scss";

export const Tournament = () => (
    <div className="tournament">
        <PageTitle title="Турнирная таблица" />
        <LeagueMap>
            <TournamentTable />
        </LeagueMap>
    </div>
);
