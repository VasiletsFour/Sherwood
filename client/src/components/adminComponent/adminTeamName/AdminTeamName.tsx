import React from "react";
import {ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {TeamApi} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {delTeamAdminAction, putTeamAdminUpdateAction} from "../../../store/team";
import {AdminUpdateDelete} from "../adminUpdateDelete/AdminUpdateDelete";
import "./AdminTeamName.scss"


export const AdminTeamName = () => {
    const dispatch = useDispatch();
    const {teams} = useSelector((state: AppState) => ({teams: state.teamState.teams}));

    const handleUpdate = (id: number, league_id: number, name: string) => {
        dispatch(putTeamAdminUpdateAction.trigger({
            id,
            league_id,
            body: {name}
        }))
    }

    const handleDelete = (id: number, league_id: number) => {
        dispatch(delTeamAdminAction.trigger({
            id,
            league_id,
            query: {deleteFromLeague: true}
        }))
    }

    return (
        <ListGroup className={"adminTeamName"}>
            {teams.data &&
            teams.finished &&
            !teams.loading &&
            teams.data.map(({name, id, league_id}: TeamApi, index: number) =>
                <AdminUpdateDelete
                    key={id + "AdminTeamPageTeamsTeams"}
                    id={id}
                    index={index}
                    title={"Изминить название команды"} text={`Вы хотите удалить эту команду ${name}?`}
                    name={name}
                    handleUpdate={(name: string) => handleUpdate(id, league_id, name)}
                    handleDelete={() => handleDelete(id, league_id)}
                />
            )}
        </ListGroup>
    );
};
