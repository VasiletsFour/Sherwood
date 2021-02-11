import React from "react";
import { TeamApi } from "../../../request/TeamApi";

interface Props {
    team: TeamApi;
    classname: string;
}

export const TableBodyTeam = ({ team, classname }: Props) => (
    <tr className={`${classname} "tableBody`}>
        <td>{team.name}</td>
        <td>{team.league_name}</td>
    </tr>
);
