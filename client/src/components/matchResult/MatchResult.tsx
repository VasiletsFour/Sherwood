import React from "react";
import {useSelector} from "react-redux";
import {ResultApi} from "../../request/ResultApi";
import {AppState} from "../../store/store";
import {timeStampToDate} from "../../utils";
import {EmptyContentBanner} from "../banner";
import "./MatchResult.scss"

export const MatchResult = () => {
    const {finished, data, loading} = useSelector((state: AppState) => (state.resultState.result));

    if (finished && !loading && data && data.length > 0) {
        return (
            <div className="matchResult">
                {data.map(({id, date, guest, host, matchResult}: ResultApi) => (
                    <div
                        className="matchResult__item"
                        key={id + "MatchResultPage"}>
                        <div className="matchResult__itemNames">
                            <p className={`matchResult__itemName matchResult__itemTeam${matchResult?.status_host}`}>{host.name}</p>
                            <span className="matchResult__itemDash">-</span>
                            <p className={`matchResult__itemName matchResult__itemTeam${matchResult?.status_guest}`}>{guest.name}</p>
                        </div>
                        <div className="matchResult__itemResult">
                            <p className="matchResult__itemResultGoals">{matchResult?.goal_host}</p>
                            <span className="matchResult__itemDash">-</span>
                            <p className="matchResult__itemResultGoals">{matchResult?.goal_guest}</p>
                        </div>
                        <span className="matchResult__itemDate">{timeStampToDate(date)}</span>
                    </div>))}
            </div>
        )
    }

    return <EmptyContentBanner text="Нет рузультатов" show={!!(finished && !loading && data && data.length === 0)}/>
};
