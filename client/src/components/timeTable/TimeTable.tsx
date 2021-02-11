import React from "react";
import { LeagueMap, PageTitle } from "../";
import "./TimeTable.scss";

export const TimeTable = () => (
    <div className="timeTable">
        <PageTitle title="Расписание" />
        <LeagueMap>
            <p>TimeTable</p>
        </LeagueMap>
    </div>
);
