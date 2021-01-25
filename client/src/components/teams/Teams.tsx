import React from "react"
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import {TeamApi} from "../../request/TeamApi"

export const Teams = () => {
    const {teams} = useSelector((state: AppState) => ({teams: state?.teamState.teams}));

    return (
        <div>{teams.finished && !teams.loading && !teams.error && teams.data && teams.data.map((item: TeamApi) =>
            <p
                key={item.id}>{item.name}</p>)}
        </div>
    )
}