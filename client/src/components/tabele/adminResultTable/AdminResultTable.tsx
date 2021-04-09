import React from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {AdminResultBody, TableHead} from "../../";
import {ResultApi} from "../../../request/ResultApi";
import {AppState} from "../../../store/store";

const headRow = ["Тур", "Хозява", "Госсти", "Дата", "Место", "Результат", "Редактировать"]

export const AdminResultTable = () => {
    const {finished, data, loading} = useSelector((state: AppState) => (state.resultState.resultAdmin));

    return (
        <Table striped bordered hover>
            <TableHead rowHead={headRow}/>
            <tbody className="adminResultTable__tableBody">
            {finished && !loading && data && data.map((item: ResultApi, index: number) => (
                <AdminResultBody key={"adminResultPage" + item.id} index={index} match={item}/>))}
            </tbody>
        </Table>
    );
}