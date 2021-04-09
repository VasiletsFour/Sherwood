import React from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {AdminTimeTableBody, TableHead} from "../../";
import {TimeTableAdminApi} from "../../../request/TimeTableApi";
import {AppState} from "../../../store/store";

const headRow = ["Тур", "Хозява", "Госсти", "Дата", "Место", "Статус"]

export const AdminTimeTable = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.timeTableState.timeTableAdmin))

    return (
        <Table striped bordered hover>
            <TableHead rowHead={headRow}/>
            <tbody className="adminUser__tableBody">
            {finished && !loading && data && data.map((item: TimeTableAdminApi, index: number) =>
                <AdminTimeTableBody key={item.id + "TableAdminTimeTable"} match={item} index={index}/>)}
            </tbody>
        </Table>
    );
}