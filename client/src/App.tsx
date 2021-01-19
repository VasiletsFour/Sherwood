import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {HomePage, TimeTablePage} from "./page";
import "./style/global.scss";
import {ROOT_URL, TIME_TABLE_URL} from "./utils/urls";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={ROOT_URL.urlTemplate} component={HomePage}/>
                    <Route path={TIME_TABLE_URL.urlTemplate} component={TimeTablePage}/>
                    <Redirect from="/" to={ROOT_URL.urlTemplate}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
