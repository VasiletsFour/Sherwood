import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {UpdatePen} from "../../";
import {CreateTeam} from "../../../request/TeamApi";
import {AppState} from "../../../store/store";
import {putTeamAdminUpdateAction} from "../../../store/team";
import {dragAndDropDefault, DragAndDropState, handleDragEnter} from "../../../utils";
import "./AdminTeamBottom.scss"

interface Props {
    setDragAndDrop: (state: DragAndDropState) => void
}

export const AdminTeamBottom = ({setDragAndDrop}: Props) => {
    const dispatch = useDispatch();
    const {adminTeam} = useSelector((state: AppState) => ({adminTeam: state.teamState.teamsAdmin}));

    return (
        <div className="adminTeamBottom">{adminTeam.finished && !adminTeam.loading && adminTeam.data &&
        <aside className="adminTeamBottom__aside">
            {adminTeam.data.map((item) => (
                <div
                    className="adminTeamBottom__item"
                    key={item.id}
                    draggable={true}
                    onDragEnd={(event) => handleDragEnter(event, () => setDragAndDrop(dragAndDropDefault))}
                    onDragEnter={(event) => handleDragEnter(event, () => setDragAndDrop({
                        inDropZone: false,
                        dropDepth: 1,
                        active: item
                    }))}>
                    <p>{item.name}</p>
                    <UpdatePen
                        classname="adminTeamBottom__updatePen"
                        onClick={(body: CreateTeam) => dispatch(putTeamAdminUpdateAction.trigger({
                            id: item.id,
                            body
                        }))}
                        id={item.id} previousValue={item.name}/>
                </div>))}
        </aside>
        }</div>

    )
};