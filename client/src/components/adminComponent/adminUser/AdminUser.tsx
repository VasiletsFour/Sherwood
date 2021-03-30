import React from "react";
import {useSelector} from "react-redux";
import {AdminTopBlock, TableAdminUser} from "../../";
import {AppState} from "../../../store/store";
import "./AdminUser.scss"


export const AdminUser = () => {
    const {adminUser} = useSelector((state: AppState) => ({adminUser: state.userState?.adminUser}));

    return (
        <div className="adminUser">
            <AdminTopBlock title={"Пользователи"}/>
            {adminUser.finished && !adminUser.loading && adminUser.data && <TableAdminUser/>}
        </div>
    )
};


