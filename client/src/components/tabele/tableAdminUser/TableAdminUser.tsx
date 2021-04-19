import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {SortType, TableBodyAdminUser, TableHead} from "../../";
import {UserApi} from "../../../request/UserApi";
import {AppState} from "../../../store/store";


const headRow = ["Пользователь", "Почта", "День рождения", "Телефон", "Роль", "Заблокирован"]

export const TableAdminUser = () => {
    const {adminUser} = useSelector((state: AppState) => ({adminUser: state.userState?.adminUser}));
    const [sortType, setSortType] = useState<SortType>({type: "", kind: "asc", kindBool: false});

    const handleSort = (type: string, kind?: "asc" | "desc", kindBool?: boolean) => {
        let sortBy: string
        const kindType = type === sortType.type && kind === "desc" ? "asc" : "desc"

        switch (type) {
            case "Пользователь":
                sortBy = "name"
                break
            case "Почта":
                sortBy = "email"
                break
        }
        console.log(type)
        adminUser.data && adminUser.data.sort((first: any, second: any) => first[sortBy].localeCompare(second[sortBy]))

        setSortType({
            type,
            kind: kindType,
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
