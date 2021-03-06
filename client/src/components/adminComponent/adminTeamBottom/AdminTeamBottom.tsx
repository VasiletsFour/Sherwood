import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {TeamApi} from "../../../request/TeamApi";
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
    const {data, finished, loading} = useSelector((state: AppState) => (state.teamState.teamsAdmin));

    return (
        <div className="adminTeamBottom">
            {finished && !loading && data && <aside className="adminTeamBottom__aside">
                {data.map((item: TeamApi) => (
                    <div
                        className="adminTeamBottom__item"
                        key={item.id + "adminTeamBottom"}
                        draggable={true}
                        onDragEnd={(event) => handleDragEnter(event, () => setDragAndDrop(dragAndDropDefault))}
                        onDragEnter={(event) => handleDragEnter(event, () => setDragAndDrop({
                            inDropZone: false,
                            dropDepth: 1,
                            active: item
                        }))}>
                        <p>{item.name}</p>
                        <UpdatePen
                            title={"Изменить название команды"}
                            classname="adminTeamBottom__updatePen"
                            onClick={(name: string) => dispatch(putTeamAdminUpdateAction.trigger({
                                id: item.id,
                                body: {name}
                            }))}
                            previousValue={item.name}/>
                        <DelTimes onClick={() => dispatch(delTeamAdminAction.trigger({id: item.id, query: {}}))}
                                  classname="adminTeamBottom__delTimes"
                                  text={`Вы хотите удалить эту лигу ${item.name}?`}/>
                    </div>))}
            </aside>}
        </div>
    )
}