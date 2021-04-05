import React from "react";
import {useSelector} from "react-redux";
import {ResultApi} from "../../request/ResultApi";
import {AppState} from "../../store/store";
import {timeStampToDate} from "../../utils";
import "./MatchResult.scss"

export const MatchResult = () => {
    const {finished, data, loading} = useSelector((state: AppState) => (state.resultState.result));
    console.log(data)
    return (
        <div className="matchResult">
            {finished && !loading && data && data.map(({
                                                           id,
                                                           date,
                                                           guest,
                                                           host,
                                                           matchAwayTeams,
                                                           matchHomeTeams
                                                       }: ResultApi) => (
                <div
                    className="matchResult__item"
                    key={id + "MatchResultPage"}>
                    <div className="matchResult__itemNames">
                        <p className={`matchResult__itemName matchResult__itemTeam${matchHomeTeams?.status}`}>{host.name}</p>
                        <span className="matchResult__itemDash">-</span>
                        <p className={`matchResult__itemName matchResult__itemTeam${matchAwayTeams?.status}`}>{guest.name}</p>
                    </div>
                    <div className="matchResult__itemResult">
                        <p className="matchResult__itemResultGoals">{matchHomeTeams?.goal_for}</p>
                        <span className="matchResult__itemDash">-</span>
                        <p className="matchResult__itemResultGoals">{matchAwayTeams?.goal_for}</p>
                    </div>
                    <span className="matchResult__itemDate">{timeStampToDate(date)}</span>
                </div>))}
        </div>
    )
};
