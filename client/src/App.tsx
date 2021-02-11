import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import {
    AccountPage,
    AdminPage,
    ApplicationListPage,
    CommitteePage,
    ConfirmAccountPage,
    HomePage,
    MatchResultPage,
    ScorerPage,
    TeamsPage,
    TimeTablePage,
    TournamentTablePage,
} from "./page";
import { AdminRoute, PrivateRoute } from "./routes";
import { store } from "./store/store";
import "./style/global.scss";
import {
    ACCOUNT_PAGE,
    ADMIN_PAGE,
    APPLICATION_LIST_PAGE,
    COMMITTEE_PAGE,
    CONFIRM_ACCOUNT_URL,
    HOME_URL,
    MATCH_RESULT_PAGE,
    ROOT_URL,
    SCORER_URL,
    TEAMS_URL,
    TIME_TABLE_URL,
    TOURNAMENT_TABLE_URL,
} from "./utils";
import history from "./utils/history";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path={HOME_URL.urlTemplate} component={HomePage} />
                        <Route path={TIME_TABLE_URL.urlTemplate} component={TimeTablePage} />
                        <Route path={TOURNAMENT_TABLE_URL.urlTemplate} component={TournamentTablePage} />
                        <Route path={CONFIRM_ACCOUNT_URL.urlTemplate} component={ConfirmAccountPage} />
                        <Route path={SCORER_URL.urlTemplate} component={ScorerPage} />
                        <Route path={TEAMS_URL.urlTemplate} component={TeamsPage} />
                        <Route path={MATCH_RESULT_PAGE.urlTemplate} component={MatchResultPage} />
                        <Route path={APPLICATION_LIST_PAGE.urlTemplate} component={ApplicationListPage} />
                        <Route path={COMMITTEE_PAGE.urlTemplate} component={CommitteePage} />

                        {/*PRIVATE*/}
                        <PrivateRoute path={ACCOUNT_PAGE.urlTemplate}>
                            <AccountPage />
                        </PrivateRoute>

                        {/*ADMIN*/}
                        <AdminRoute path={ADMIN_PAGE.urlTemplate}>
                            <AdminPage />
                        </AdminRoute>

                        <Redirect from={ROOT_URL.urlTemplate} to={HOME_URL.urlTemplate} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
