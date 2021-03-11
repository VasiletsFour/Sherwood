import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CreateTeam, TeamApi} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {delTeamAdminAction, putTeamAdminUpdateAction} from "../../../store/team";
import {DelTimes, UpdatePen} from "../../icon";
import "./AdminTeamName.scss"


export const AdminTeamName = () => {
    const dispatch = useDispatch();
    const {teams} = useSelector((state: AppState) => ({teams: state.teamState.teams}));

    return (
        <div>
            {teams.data &&
            teams.finished &&
            !teams.loading &&
            teams.data.map(({name, id, league_id}: TeamApi, index: number) =>
                <div className="adminTeamName" key={id + "AdminTeamPageTeamsTeams"}>
                    <p><span>{index + 1})</span>{name}</p>
                    <UpdatePen
                        classname="adminTeamName__updatePen"
                        onClick={(body: CreateTeam) => {
                            dispatch(putTeamAdminUpdateAction.trigger({id, league_id, body}))
                        }}
                        previousValue={name}
                    />
                    <DelTimes
                        classname="adminTeamName__delTimes"
                        onClick={() => dispatch(delTeamAdminAction.trigger({
                            id,
                            league_id,
                            query: {deleteFromLeague: true}
                        }))}
                        name={name}/>
                </div>)}
        </div>
    );
};
