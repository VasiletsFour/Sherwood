import React from "react";
import {TeamApi} from "../../../request/TeamApi";

interface Props {
    team: TeamApi;
    index: number
    classname: string;
}

export const TableBodyTeam = ({team, classname, index}: Props) => (
    <tr className={`${classname} "tableBody`}>
        <td>{index + 1}</td>
        <td>{team.name}</td>
        <td>{team.league_name}</td>
    </tr>
);
