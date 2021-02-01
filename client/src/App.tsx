import React from "react";
import {ConnectedRouter} from "connected-react-router";
import {Redirect, Route, Switch} from "react-router-dom";
import {
    AccountPage,
    ConfirmAccountPage,
    HomePage,
    ScorerPage,
    TeamsPage,
    TimeTablePage,
    TournamentTablePage
} from "./page";
import "./style/global.scss";
import {
    ACCOUNT_PAGE,
    CONFIRM_ACCOUNT_URL,
    HOME_URL,
    ROOT_URL,
    SCORER_URL,
    TEAMS_URL,
    TIME_TABLE_URL,
    TOURNAMENT_TABLE_URL
} from "./utils/urls";
import {store} from "./store/store";
import {Provider} from "react-redux";
import history from "./utils/history";
import {PrivateRoute} from "./routes";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path={HOME_URL.urlTemplate} component={HomePage}/>
                        <Route path={TIME_TABLE_URL.urlTemplate} component={TimeTablePage}/>
                        <Route path={TOURNAMENT_TABLE_URL.urlTemplate} component={TournamentTablePage}/>
                        <Route path={CONFIRM_ACCOUNT_URL.urlTemplate} component={ConfirmAccountPage}/>
                        <Route path={SCORER_URL.urlTemplate} component={ScorerPage}/>
                        <Route path={TEAMS_URL.urlTemplate} component={TeamsPage}/>

                        {/*PRIVATE*/}
                        <PrivateRoute path={ACCOUNT_PAGE.urlTemplate}>
                            <AccountPage/>
                        </PrivateRoute>

                        <Redirect from={ROOT_URL.urlTemplate} to={HOME_URL.urlTemplate}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
