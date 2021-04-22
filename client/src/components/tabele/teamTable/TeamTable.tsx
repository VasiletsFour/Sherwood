import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {EmptyContentBanner, TableHead} from "../../";
import {TeamApi, TeamQuery} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {getTeamListAction} from "../../../store/team";
import {TEAMS_URL} from "../../../utils";
import {TableBodyTeam} from "../tableBodyTeam/TableBodyTeam";
import "./TeamTable.scss";

const headRow = ["Имя", "Лига"];

export interface SortType extends TeamQuery {
    kindBool: boolean;
}

export const TeamsTable = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { teams } = useSelector((state: AppState) => ({ teams: state?.teamState.teams }));
    const [sortType, setSortType] = useState<SortType>({ type: "", kind: "asc", kindBool: false });
    let list = teams.data && !teams.loading && teams.finished && teams.data;

    const handleSort = (type: string, kind?: "asc" | "desc", kindBool?: boolean) => {
        const params: TeamQuery = {
            kind: kind === "desc" && type === sortType.type ? "asc" : "desc",
            type: type === "Имя" ? "name" : "league_id",
        };

        dispatch(getTeamListAction.trigger({query: params}));
        history.push(TEAMS_URL.format({}, params), params);

        setSortType({
            type,
            kind: params.kind,
            kindBool: !kindBool,
        });
    };

    if (teams.finished && !teams.loading && teams.data && teams?.data?.length > 0) {
        return (
            <Table striped bordered hover variant="dark" className="teamTable">
                <TableHead
                    classname="team__tableCol team__tableColHead"
                    rowHead={headRow}
                    sortType={sortType}
                    setSortType={(type: string, kind?: "asc" | "desc", kindBool?: boolean) =>
                        handleSort(type, kind, kindBool)
                    }
                />
                <tbody className="team__tableBody">
                {list &&
                list.map((item: TeamApi, index: number) => (
                    <TableBodyTeam key={item.id + "teamTable"} index={index} team={item} classname="team"/>
                ))}
                </tbody>
            </Table>
        );
    }

    return <EmptyContentBanner text="Пока нет команд"
                               show={!!(teams.finished && !teams.loading && teams.data && teams?.data?.length === 0)}/>
};
