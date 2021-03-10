import React from "react";
import {useSelector} from "react-redux";
import {TableBodyAdminUser, TableHead} from "../../";
import {UserApi} from "../../../request/UserApi";
import {AppState} from "../../../store/store";
import "./AdminUser.scss"

const headRow = ["Пользователь", "Почта", "Роль", "Заблокирован"]

export const AdminUser = () => {
    const {adminUser} = useSelector((state: AppState) => ({adminUser: state.userState?.adminUser}));

    return (
        <div className="adminUser">
            <table className="adminUser__table">
                <TableHead
                    classname="adminUser__tableCol adminUSer__tableColHead"
                    rowHead={headRow}
                />
                <tbody className="adminUser__tableBody">
                {adminUser.finished && !adminUser.loading && adminUser.data && adminUser.data.map((item: UserApi) =>
                    <TableBodyAdminUser key={item.id + "adminUser"} user={item} classname="adminUser__body"/>)}
                </tbody>
            </table>
        </div>
    );
}

