import React from "react"
import {MainLayout} from "../../layouts";
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {Loader} from "../../components";

export const AccountPage = () => {
    const {account} = useSelector((state: AppState) => ({account: state?.accountState.account}));

    return (
        <MainLayout>
            <div>
                {account.finished && !account.loading && account.data?.role === "user" && <h1>user</h1>}
                {account.finished && !account.loading && account.data?.role === "admin" && <h1>admin</h1>}
                {!account.finished && account.loading && <Loader/>}
            </div>
        </MainLayout>
    )
}