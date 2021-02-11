import React from "react";
import { useSelector } from "react-redux";
import { LeagueName, Loader } from "../";
import { LeagueApi } from "../../request/LeagueApi";
import { AppState } from "../../store/store";
import "./LeagueMap.scss";

interface Props {
    children: JSX.Element;
}

export const LeagueMap = ({ children }: Props) => {
    const { league } = useSelector((state: AppState) => ({ league: state?.leagueState.league }));

    return (
        <div className="leagueMap">
            {league.finished && !league.loading && league.data ? (
                league.data.map((item: LeagueApi) => (
                    <LeagueName key={item.id + "LeagueName"} data={item}>
                        {children}
                    </LeagueName>
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};
