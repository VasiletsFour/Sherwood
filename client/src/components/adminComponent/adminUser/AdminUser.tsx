import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AdminFilterBtn, AdminTopBlock, TableAdminUser} from "../../";
import {AppState} from "../../../store/store";
import {AdminFilterUser} from "../adminFilterUser/AdminFilterUser";
import "./AdminUser.scss"


export const AdminUser = () => {
    const {adminUser} = useSelector((state: AppState) => ({adminUser: state.userState?.adminUser}));
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="adminUser">
            <AdminTopBlock title={"Пользователи"}>
                <AdminFilterBtn text={"Сортировать статьи"} onClick={() => setOpenFilter(!openFilter)}/>
            </AdminTopBlock>
            <AdminFilterUser openStatus={openFilter} handleClose={() => setOpenFilter(false)}/>
            {adminUser.finished && !adminUser.loading && adminUser.data && <TableAdminUser/>}
        </div>
    )
};


