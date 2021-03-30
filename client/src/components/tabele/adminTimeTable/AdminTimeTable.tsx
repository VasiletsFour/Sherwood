import React from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {AdminTimeTableBody, TableHead} from "../../";
import {TimeTableApi} from "../../../request/TimeTableApi";
import {AppState} from "../../../store/store";

const headRow = ["Тур", "Хозява", "Госсти", "Дата", "Место", "Статус"]

export const AdminTimeTable = () => {
    const {timeTable} = useSelector((state: AppState) => ({timeTable: state.timeTableState.timeTable}))

    return (
        <Table striped bordered hover>
            <TableHead rowHead={headRow}/>
            <tbody className="adminUser__tableBody">
            {timeTable.finished && !timeTable.loading && timeTable.data && timeTable.data.map((item: TimeTableApi, index: number) =>
                <AdminTimeTableBody key={item.id + "TableAdminTimeTable"} match={item} index={index}/>)}
            </tbody>
        </Table>
    );
}