import React from "react";
import {ListGroup} from 'react-bootstrap';
import {FaPlus} from "react-icons/fa";
import {Leagues} from "../../../request/LeagueApi";

interface Props {
    name: string
    leagues: Leagues[]
    id: number
    handleClick: (league: Leagues[], id: number) => void
}

export const AdminLeagueHead = ({name, leagues, id, handleClick}: Props) => (
    <ListGroup.Item variant={"dark"}>
        <div className="adminLeague__topHead">
            <h2 className="adminLeague__title">{name}</h2>
            <FaPlus className="adminLeague__topIcon" onClick={() => handleClick(leagues, id)}/>
        </div>
    </ListGroup.Item>
);
