import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import {
    AccountPage,
    AdminBlogPage,
    AdminLeaguePage,
    AdminPage,
    AdminPlayerPage,
    AdminSeasonPage,
    AdminTeamPage,
    AdminUserPage,
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
    ADMIN_BLOG_PAGE,
    ADMIN_LEAGUE_PAGE,
    ADMIN_PAGE,
    ADMIN_PLAYER_PAGE,
    ADMIN_SEASON_PAGE,
    ADMIN_TEAM_PAGE,
    ADMIN_USER_PAGE,
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
            <ErrorBoundary>
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
                            <AdminRoute path={ADMIN_PAGE.urlTemplate} excat>
                                <AdminPage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_BLOG_PAGE.urlTemplate} excat>
                                <AdminBlogPage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_SEASON_PAGE.urlTemplate} excat>
                                <AdminSeasonPage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_SEASON_PAGE.urlTemplate} excat>
                                <AdminSeasonPage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_LEAGUE_PAGE.urlTemplate} excat>
                                <AdminLeaguePage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_TEAM_PAGE.urlTemplate} excat>
                                <AdminTeamPage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_PLAYER_PAGE.urlTemplate} excat>
                                <AdminPlayerPage />
                            </AdminRoute>
                            <AdminRoute path={ADMIN_USER_PAGE.urlTemplate} excat>
                                <AdminUserPage />
                            </AdminRoute>

                            <Redirect from={ROOT_URL.urlTemplate} to={HOME_URL.urlTemplate} />
                        </Switch>
                    </ConnectedRouter>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App;
