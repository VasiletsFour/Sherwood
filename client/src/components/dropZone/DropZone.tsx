import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {TeamApi} from "../../request/TeamApi";
import {dragAndDropDefault, DragAndDropState, handleDragLeave, handleDragOver, handleDrop} from "../../utils";
import "./DropZone.scss"

interface Props {
    text?: string
    dragAndDrop: DragAndDropState
    setDragAndDrop: (dragDrop: DragAndDropState) => void
    classname: string
    addTeam: (teams: TeamApi[]) => void
}

export const DropZone = ({classname, text, dragAndDrop, setDragAndDrop, addTeam}: Props) => {
    const [list, setList] = useState<any>([])

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const isArray = list.includes(dragAndDrop.active)

        if (dragAndDrop.dropDepth < 1 || isArray) return

        handleDrop(event, () => setDragAndDrop(dragAndDropDefault));

        list.push(dragAndDrop.active)
        setList(list)
    }

    const deleteTeam = (id: number) => setList(list.filter((item: TeamApi) => item.id !== id))

    return (
        <div className={`${classname}__dropZone dropZone`}>
            {text &&
            <div className={`dropZone__textContainer ${dragAndDrop.inDropZone && "dropZone__inDropZone"}`}
                 onDrop={event => onDrop(event)}
                 onDragLeave={event => handleDragLeave(event, dragAndDrop.dropDepth, () => setDragAndDrop({
                     ...dragAndDrop,
                     inDropZone: false
                 }))}
                 onDragOver={event => !list.includes(dragAndDrop.active) && handleDragOver(event, dragAndDrop.dropDepth, () => setDragAndDrop({
                     ...dragAndDrop,
                     inDropZone: true
                 }))}
            >
                <p className="dropZone__text">{text}</p>
            </div>}
            {list.length > 0 &&
            <div className="dropZone__wrapper">
                <ul>
                    {list.map((item: TeamApi) => (
                        <li key={item.id} className="dropZone__listItem adminTeamBottom__item">
                            <p>{item.name}</p>
                            <FaTimes onClick={() => deleteTeam(item.id)}/>
                        </li>))}
                </ul>
                <button onClick={() => addTeam(list)}>Сохранить</button>
            </div>}
        </div>
    )
}

