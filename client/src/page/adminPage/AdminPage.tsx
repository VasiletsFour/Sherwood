import React from "react";
import {useSelector} from "react-redux";
import {AdminLayout} from "../../layouts";
import {AppState} from "../../store/store";

export const AdminPage = () => {
    const {account} = useSelector((state: AppState) => ({account: state?.accountState.account}));

    return (
        <AdminLayout>
            <div>
                {account.finished && !account.loading && account.data?.role === "admin" && <h1>admin</h1>}
            </div>
        </AdminLayout>
    );
};
