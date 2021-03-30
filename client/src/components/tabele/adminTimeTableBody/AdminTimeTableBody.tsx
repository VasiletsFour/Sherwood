import React from "react";
import {TimeTableApi} from "../../../request/TimeTableApi";
import {UpdatePen} from "../../icon";
import "./AdminTimeTableBody.scss"

interface Props {
    index: number
    match: TimeTableApi;
}

export const AdminTimeTableBody = ({index, match}: Props) => {
    return (
        <tr className="adminTimeTableBody">
            <th>{index + 1}</th>
            <td>{match.tour} Тур</td>
            <td>{match.host}</td>
            <td>{match.guest}</td>
            <td>
                <div className="adminTimeTableBody__td">
                    {match?.date || "-"}
                    <UpdatePen
                        onClick={() => alert("date")}
                        previousValue={""}
                        classname={"test"} title={"Изменить Дату проведения матча"}/>
                </div>
            </td>
            <td>
                <div className="adminTimeTableBody__td">
                    {match?.palace || "-"}
                    <UpdatePen
                        onClick={() => alert("place")}
                        previousValue={""}
                        classname={"test"} title={"Изменить Место проведения матча"}/>
                </div>
            </td>
            <td>
                <div className="adminTimeTableBody__td">
                    {match?.status || "-"}
                    <UpdatePen
                        onClick={() => alert("status")}
                        previousValue={""}
                        classname={"test"} title={"Изменить Статус матча"}/>
                </div>
            </td>
        </tr>
    )
}
