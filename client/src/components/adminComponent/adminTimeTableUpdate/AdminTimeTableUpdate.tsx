import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/store";
import {AdminTimeTable} from "../../tabele";
import {AdminTopBlock} from "../adminTopBlock/AdminTopBlock";
import "./AdminTimeTableUpdate.scss"

export const AdminTimeTableUpdate = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.timeTableState.timeTableAdmin));

    return (
        <div className="adminTimeTableUpdate">
            <AdminTopBlock title={"Расписание"} text={"Редактировать"}/>
            {finished && !loading && data && <AdminTimeTable/>}
        </div>
    )
};


