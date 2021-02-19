import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/store";

export const AdminLeague = () => {
        const {league} = useSelector((state: AppState) => ({league: state.leagueState?.league}));
        const {season} = useSelector((state: AppState) => ({season: state.seasonState?.seasons}));
        console.log(league, season)
        return (
            <div className="adminSeason">
                work
            </div>
        );
    }
;
