import React from "react";
import {Table} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {TableBodyAdminUser, TableHead} from "../../";
import {UserApi} from "../../../request/UserApi";
import {AppState} from "../../../store/store";


const headRow = ["Пользователь", "Почта", "Роль", "Заблокирован"]

export const TableAdminUser = () => {
    const {adminUser} = useSelector((state: AppState) => ({adminUser: state.userState?.adminUser}));

    return (
        <Table striped bordered hover>
            <TableHead rowHead={headRow}/>
            <tbody className="adminUser__tableBody">
            {adminUser.finished && !adminUser.loading && adminUser.data && adminUser.data.map((item: UserApi, index: number) =>
                <TableBodyAdminUser key={item.id + "adminUser"} user={item} index={index}/>)}
            </tbody>
        </Table>
    );
}
