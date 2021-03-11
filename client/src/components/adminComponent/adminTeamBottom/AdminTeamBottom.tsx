import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CreateTeam, TeamApi} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {delTeamAdminAction, putTeamAdminUpdateAction} from "../../../store/team";
import {dragAndDropDefault, DragAndDropState, handleDragEnter} from "../../../utils";
import {DelTimes, UpdatePen} from "../../icon";
import "./AdminTeamBottom.scss"

interface Props {
    setDragAndDrop: (state: DragAndDropState) => void
}

export const AdminTeamBottom = ({setDragAndDrop}: Props) => {
    const dispatch = useDispatch();
    const {adminTeam} = useSelector((state: AppState) => ({adminTeam: state.teamState.teamsAdmin}));

    return (
        <div className="adminTeamBottom">
            {adminTeam.finished && !adminTeam.loading && adminTeam.data && <aside className="adminTeamBottom__aside">
                {adminTeam.data.map(({id, name}: TeamApi) => (
                    <div
                        className="adminTeamBottom__item"
                        key={id + "adminTeamBottom"}
                        draggable={true}
                        onDragEnd={(event) => handleDragEnter(event, () => setDragAndDrop(dragAndDropDefault))}
                        onDragEnter={(event) => handleDragEnter(event, () => setDragAndDrop({
                            inDropZone: false,
                            dropDepth: 1,
                            active: id
                        }))}>
                        <p>{name}</p>
                        <UpdatePen
                            classname="adminTeamBottom__updatePen"
                            onClick={(body: CreateTeam) => dispatch(putTeamAdminUpdateAction.trigger({id, body}))}
                            previousValue={name}/>
                        <DelTimes onClick={() => dispatch(delTeamAdminAction.trigger({id, query: {}}))}
                                  classname="adminTeamBottom__delTimes" name={name}/>
                    </div>))}
            </aside>}
        </div>
    )
}