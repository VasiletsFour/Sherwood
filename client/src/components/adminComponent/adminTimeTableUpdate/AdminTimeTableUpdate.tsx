import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/store";
import {AdminTimeTable} from "../../tabele";
import {AdminTopBlock} from "../adminTopBlock/AdminTopBlock";
import "./AdminTimeTableUpdate.scss"

export const AdminTimeTableUpdate = () => {
    const {timeTable} = useSelector((state: AppState) => ({timeTable: state.timeTableState.timeTable}));

    return (
        <div className="adminTimeTableUpdate">
            <AdminTopBlock title={"Расписание"} text={"Редактировать"}/>
            {timeTable.finished && !timeTable.loading && timeTable.data && <AdminTimeTable/>}
        </div>
    )
};


