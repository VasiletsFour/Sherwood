import React from "react";
import {ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {TimeTableApi} from "../../request/TimeTableApi";
import {AppState} from "../../store/store";
import {timeStampToDate} from "../../utils";
import {EmptyContentBanner} from "../banner";
import "./TimeTable.scss";

export const TimeTable = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.timeTableState.timeTable));

    if (finished && !loading && data && data.length > 0) {
        return (
            <div className="timeTable">
                <ListGroup>
                    {data.map(({date, host, guest, id, place}: TimeTableApi) =>
                        <ListGroup.Item
                            key={id + "resultPage"}>
                            <div className="timeTable__item">
                                <h2>{place.name}</h2>
                                <div className="timeTable__teamNames">
                                    <p className="timeTable__name">{host.name}</p>
                                    <span>-</span>
                                    <p className="timeTable__name">{guest.name}</p>
                                </div>
                                <p>{timeStampToDate(date)}</p>
                            </div>
                        </ListGroup.Item>)}
                </ListGroup>
            </div>
        )
    }
    return <EmptyContentBanner text={"Нет расписания"} show={!!(finished && !loading && data && data.length === 0)}/>
};
