import React from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {TableBodyTournament, TableHead} from "../../";
import {TournamentTableApi} from "../../../request/TournamentTableApi";
import {AppState} from "../../../store/store";
import "./TournamentTable.scss";

const headRow = [
    "Позиция",
    "Имя",
    "Игр",
    "Побед",
    "Ничьих",
    "Поражений",
    "Забито",
    "Пропущено",
    "Разница",
    "Очков",
];

export const TournamentTable = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state?.tournamentTableState?.tournamentTable));

    return (
        <Table striped bordered hover variant="dark" className="tournamentTable">
            <TableHead classname="tournamentTable__tableCol tournamentTable__tableColHead" rowHead={headRow}/>
            <tbody className="tournamentTable__tableBody">
            {finished && !loading && data && data.map((item: TournamentTableApi, index: number) => (
                <TableBodyTournament
                    key={"Table" + item.id}
                    team={item}
                    index={index}
                    classname="tournamentTable__tableCol tournamentTable__tableColBody"
                />
            ))}
            </tbody>
        </Table>
    );
};
