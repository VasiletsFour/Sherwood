import React, {useState} from "react";
import {ResultApi} from "../../../request/ResultApi";
import {timeStampToDate} from "../../../utils";
import {AdminRefactorMatch} from "../../adminComponent";
import {AdminCreateBtn} from "../../buttons";

interface Props {
    index: number
    match: ResultApi;
}

export const AdminResultBody = ({index, match}: Props) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <tr className="adminTimeTableBody">
            <th>{index + 1}</th>
            <td>{match.tour} Тур</td>
            <td>{match.host?.name}</td>
            <td>{match.guest?.name}</td>
            <td>{match.date ? timeStampToDate(match?.date) : "-"}</td>
            <td>{match?.place?.name || "-"}</td>
            <td>
                {match?.matchResult ? match?.matchResult?.goal_host + "-" + match?.matchResult.goal_guest : "-"}
            </td>
            <td>
                <AdminCreateBtn text={"Редактировать"} onClick={() => setOpenModal(true)}/>
            </td>
            <AdminRefactorMatch
                match_id={match.id}
                home={match?.matchResult?.goal_host}
                away={match?.matchResult?.goal_guest}
                setClose={() => setOpenModal(false)}
                openStatus={openModal}/>
        </tr>
    )
}
