import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CreateTeam, TeamApi} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {delTeamAdminAction, putTeamAdminUpdateAction} from "../../../store/team";
import {AdminUpdateDelete} from "../adminUpdateDelete/AdminUpdateDelete";
import "./AdminTeamName.scss"


export const AdminTeamName = () => {
    const dispatch = useDispatch();
    const {teams} = useSelector((state: AppState) => ({teams: state.teamState.teams}));

    const handleUpdate = (id: number, league_id: number, body: CreateTeam) => {
        dispatch(putTeamAdminUpdateAction.trigger({
            id,
            league_id,
            body
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
        <div className={"adminTeamName"}>
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
                    handleUpdate={(body: CreateTeam) => handleUpdate(id, league_id, body)}
                    handleDelete={() => handleDelete(id, league_id)}
                    classname={"adminTeamName"}/>
            )}
        </div>
    );
};
