import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { AppState } from "../store/store";
import { getToken, HOME_URL } from "../utils";

export const AdminRoute = ({ children, ...rest }: any) => {
    const localStorageToken = getToken();
    const { account } = useSelector((state: AppState) => ({
        account: state.accountState.account
    }));
    const isAdmin = account && account.data?.role === "admin" && localStorageToken;

    return (
        <Route
            {...rest}
            render={() => {
                if (isAdmin) {
                    return children;
                }

                if (!localStorageToken || (account.finished && !account.data)) {
                    return <Redirect from={"*"} to={HOME_URL.urlTemplate} />;
                }
            }}
        />
    );
};
