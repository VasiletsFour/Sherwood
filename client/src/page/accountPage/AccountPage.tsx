import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components";
import { MainLayout } from "../../layouts";
import { AppState } from "../../store/store";

export const AccountPage = () => {
    const { account } = useSelector((state: AppState) => ({ account: state?.accountState.account }));

    return (
        <MainLayout>
            <div>
                {account.finished && !account.loading && account.data?.role === "user" && <h1>user</h1>}
                {!account.finished && account.loading && <Loader />}
            </div>
        </MainLayout>
    );
};
