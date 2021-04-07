import React, {useState} from "react";
import {ListGroup} from 'react-bootstrap';
import {ChevronDownRight} from "../";
import {LeagueApi} from "../../request/LeagueApi";
import "./LeagueName.scss";

interface Props {
    data: LeagueApi;
    children: JSX.Element;
}

export const LeagueName = ({data, children}: Props) => {
    const [openChild, setOpenChild] = useState(false);

    return (
        <ListGroup.Item variant={"light"} className="leagueName">
            <div className="leagueName__nameContainer" onClick={() => setOpenChild(!openChild)}>
                <p className="leagueName__name">{data.name}</p>
                <ChevronDownRight classname="leagueName__icon" open={openChild}/>
            </div>
            <div className="leagueName__childWrapper">{openChild && children}</div>
        </ListGroup.Item>
    );
};
