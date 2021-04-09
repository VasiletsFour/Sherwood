import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TimeTableAdminApi} from "../../../request/TimeTableApi";
import {AppState} from "../../../store/store";
import {putTimeTableUpdateAdminAction} from "../../../store/timeTable";
import {dateToTimeStamp, timeStampToDate} from "../../../utils";
import {UpdatePen} from "../../icon";
import "./AdminTimeTableBody.scss"

interface Props {
    index: number
    match: TimeTableAdminApi;
}

export const AdminTimeTableBody = ({index, match}: Props) => {
    const dispatch = useDispatch()
    const {place} = useSelector((state: AppState) => ({place: state.placeState.placeAdmin}));

    const handleDate = (date: string) => {
        const timeStamp = dateToTimeStamp(date)

        dispatch(putTimeTableUpdateAdminAction.trigger({id: match.id, body: {date: timeStamp}}))
    }

    const handlePlace = (place_id: number) => dispatch(putTimeTableUpdateAdminAction.trigger({
        id: match.id,
        body: {place_id}
    }))
    const handleStatus = (status: string) => console.log(status)

    return (
        <tr className="adminTimeTableBody">
            <th>{index + 1}</th>
            <td>{match.tour} Тур</td>
            <td>{match.host?.name}</td>
            <td>{match.guest?.name}</td>
            <td>
                <div className="adminTimeTableBody__td">
                    {match.date ? timeStampToDate(match?.date) : "-"}
                    <UpdatePen
                        isDate={true}
                        onClick={(value) => handleDate(value)}
                        previousValue={match.date ? timeStampToDate(match.date) : ""}
                        classname={"test"} title={"Изменить Дату проведения матча"}/>
                </div>
            </td>
            <td>
                <div className="adminTimeTableBody__td">
                    {match?.place?.name || "-"}
                    <UpdatePen
                        option={place.data || []}
                        isSelect={true}
                        onClick={(value: string) => handlePlace(Number(value))}
                        previousValue={match?.place?.name || ""}
                        classname={"test"} title={"Изменить Место проведения матча"}/>
                </div>
            </td>
            <td>
                <div className="adminTimeTableBody__td">
                    {match?.status || "-"}
                    <UpdatePen
                        isSelect={true}
                        onClick={(value: string) => handleStatus(value)}
                        previousValue={""}
                        classname={"test"} title={"Изменить Статус матча"}/>
                </div>
            </td>
        </tr>
    )
}
