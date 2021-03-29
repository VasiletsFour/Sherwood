import React from "react";
import {useHistory} from "react-router-dom";
import {AdminTimeTableCreate, AdminTimeTableUpdate} from "../../components";
import {AdminLayout} from "../../layouts";
import {ADMIN_TIME_TABLE_CREATE_PAGE, ADMIN_TIME_TABLE_UPDATE_PAGE} from "../../utils";

export const AdminTimeTablePage = () => {
    const history = useHistory();
    const isAdminTimeTableCreatePage = ADMIN_TIME_TABLE_CREATE_PAGE.match(history.location).isMatched;
    const isAdminTimeTableUpdatePage = ADMIN_TIME_TABLE_UPDATE_PAGE.match(history.location).isMatched;

    return (
        <AdminLayout>
            {isAdminTimeTableCreatePage && !isAdminTimeTableUpdatePage ? <AdminTimeTableCreate/> :
                <AdminTimeTableUpdate/>}
        </AdminLayout>
    )
};
