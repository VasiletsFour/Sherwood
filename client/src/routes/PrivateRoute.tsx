import * as React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {AppState} from "../store/store";
import {getToken} from "../utils/storage";
import {HOME_URL} from "../utils/urls";

export const PrivateRoute = ({children, ...rest}: any) => {
    const localStorageToken = getToken();
    const {account} = useSelector((state: AppState) => ({account: state.accountState.account}));
    const isUser = account && (account.data?.role === "user" || account.data?.role === "admin") && localStorageToken;

    return (
        <Route
            {...rest}
            render={() => {
                if (isUser) {
                    return children;
                }

                if (!localStorageToken || (account.finished && !account.data)) {
                    return <Redirect from={"*"} to={HOME_URL.urlTemplate}/>;
                }
            }}
        />
    );
}
