import React from "react";
import {ListGroup} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {EmptyContentBanner, LeagueName} from "../";
import {Leagues} from "../../request/LeagueApi";
import {AppState} from "../../store/store";
import "./LeagueMap.scss";

interface Props {
    children: JSX.Element;
}

export const LeagueMap = ({children}: Props) => {
    const {data, finished, loading} = useSelector((state: AppState) => (state?.leagueState.league));

    if (finished && !loading && data && data.length > 0) {
        return (
            <ListGroup className="leagueMap">
                {data[0].leagues.map((item: Leagues) => <LeagueName key={item.id + "LeagueName"}
                                                                    data={item}>{children}</LeagueName>)
                }</ListGroup>
        );
    }

    return <EmptyContentBanner text="Some text" show={!!(data && data.length === 0 && !loading && finished)}/>
};
