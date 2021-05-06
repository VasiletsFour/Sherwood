import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AdminFilterBtn, AdminTopBlock, SpinnerWrapper, TableAdminUser} from "../../";
import {AppState} from "../../../store/store";
import {AdminFilterUser} from "../adminFilterUser/AdminFilterUser";
import "./AdminUser.scss"


export const AdminUser = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.userState?.adminUser));
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="adminUser">
            <AdminTopBlock title={"Пользователи"}>
                <AdminFilterBtn
                    show={!!(data && data.length > 0 && !loading && finished)}
                    text="Сортировать Пользователей" onClick={() => setOpenFilter(!openFilter)}/>
            </AdminTopBlock>
            <AdminFilterUser openStatus={openFilter} handleClose={() => setOpenFilter(false)}/>
            <SpinnerWrapper show={!finished && loading}/>
            {finished && !loading && data && data.length > 0 && <TableAdminUser/>}
        </div>
    )
};


