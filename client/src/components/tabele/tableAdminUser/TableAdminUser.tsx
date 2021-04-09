import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {SortType, TableBodyAdminUser, TableHead} from "../../";
import {TeamQuery} from "../../../request/TeamApi";
import {UserApi} from "../../../request/UserApi";
import {AppState} from "../../../store/store";


const headRow = ["Пользователь", "Почта", "День рождения", "Телефон", "Роль", "Заблокирован"]

export const TableAdminUser = () => {
    const {adminUser} = useSelector((state: AppState) => ({adminUser: state.userState?.adminUser}));
    const [sortType, setSortType] = useState<SortType>({type: "", kind: "asc", kindBool: false});

    const handleSort = (type: string, kind?: "asc" | "desc", kindBool?: boolean) => {
        const params: TeamQuery = {
            kind: kind === "desc" && type === sortType.type ? "asc" : "desc",
            type: type === "Имя" ? "name" : "league_id",
        };

        // dispatch(getTeamListAction.trigger({query: params}));
        // history.push(TEAMS_URL.format({}, params), params);

        setSortType({
            type,
            kind: params.kind,
            kindBool: !kindBool,
        });
    };

    return (
        <Table striped bordered hover>
            <TableHead rowHead={headRow} sortType={sortType}
                       setSortType={(type: string, kind?: "asc" | "desc", kindBool?: boolean) =>
                           handleSort(type, kind, kindBool)
                       }/>
            <tbody className="adminUser__tableBody">
            {adminUser.finished && !adminUser.loading && adminUser.data && adminUser.data.map((item: UserApi, index: number) =>
                <TableBodyAdminUser key={item.id + "adminUser"} user={item} index={index}/>)}
            </tbody>
        </Table>
    );
}
