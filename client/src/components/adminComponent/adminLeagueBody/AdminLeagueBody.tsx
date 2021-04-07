import React from "react";
import {ListGroup} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {DelTimes} from "../../";
import {delLeagueAction} from "../../../store/league";

interface Props {
    id: number
    name: string
}

export const AdminLeagueBody = ({id, name}: Props) => {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item action>
            <div className="adminLeague__leagueContainer">
                <p className="adminLeague__league">{name} </p>
                <DelTimes
                    text={`Вы хотите удалить эту лигу ${name}?`}
                    onClick={() => dispatch(delLeagueAction.trigger({id}))}
                    classname="adminLeague__leagueIcon"/>
            </div>
        </ListGroup.Item>)
}

