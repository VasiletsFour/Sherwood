import React, {useState} from "react";
import {FaCircle} from "react-icons/fa";
import {ChevronDownRight} from "../../";
import {TournamentTableApi} from "../../../request/TournamentTableApi";
import "./TableBodyTournament.scss";

interface Props {
    team: TournamentTableApi;
    index: number;
    classname: string;
}

export const TableBodyTournament = ({team, index, classname}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <tr className={`${classname} "tableBody`}>
            <td onClick={() => setOpen(!open)}>
                <ChevronDownRight open={open} />
            </td>
            <td>
                {index + 1}{" "}
                {/*{index + 1 > team.previousPosition ? (*/}
                {/*    <FaSortDown className="tableBody__down" />*/}
                {/*) : index + 1 === team.previousPosition ? (*/}
                    <FaCircle className="tableBody__circle" />
                {/*) : (*/}
                {/*    <FaSortUp className="tableBody__up" />*/}
                {/*)}*/}
            </td>
            <td>{team.name}</td>
            <td>{team.win + team.draw + team.lose}</td>
            <td>{team.win}</td>
            <td>{team.draw}</td>
            <td>{team.lose}</td>
            <td>{team.goalFor}</td>
            <td>{team.goalAgainst}</td>
            <td>
                {team.goalFor > team.goalAgainst && "+"}
                {team.goalFor - team.goalAgainst}
            </td>
            <td>
                <strong>{team.points}</strong>
            </td>
        </tr>
    );
};
