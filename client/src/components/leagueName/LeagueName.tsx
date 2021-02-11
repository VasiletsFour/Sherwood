import React, { useState } from "react";
import { LeagueApi } from "../../request/LeagueApi";
import { ChevronDownRight } from "../icon/chevronDownRight/ChevronDownRight";
import "./LeagueName.scss";

interface Props {
    data: LeagueApi;
    children: JSX.Element;
}

export const LeagueName = ({ data, children }: Props) => {
    const [openChild, setOpenChild] = useState(false);

    return (
        <div className="leagueName">
            <div className="leagueName__nameContainer" onClick={() => setOpenChild(!openChild)}>
                <ChevronDownRight open={openChild} />
                <p className="leagueName__name">{data.name}</p>
            </div>
            <div className="leagueName__childWrapper">{openChild && children}</div>
        </div>
    );
};
