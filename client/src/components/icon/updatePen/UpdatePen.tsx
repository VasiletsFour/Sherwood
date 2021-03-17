import React, {useState} from "react";
import {FaPen} from "react-icons/fa";
import {CreateTeam} from "../../../request/TeamApi";
import {Alert} from "../../alert/Alert";

interface Props {
    onClick: (body: CreateTeam) => void
    classname: string
    previousValue: string
    title: string
}

export const UpdatePen = ({classname, onClick, previousValue, title}: Props) => {
    const [value, setValue] = useState(previousValue)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClick = () => {
        setOpenAlert(false)

        return onClick({name: value})
    }

    return (
        <div>
            <FaPen className={classname} onClick={() => setOpenAlert(true)}/>
            <Alert
                openStatus={openAlert}
                title={title}
                text={`Текущее название ${previousValue}`}
                closeClick={() => setOpenAlert(false)}
                okClick={() => handleClick()} btnText={"Ok"}>
                <input value={value} onChange={(event) => setValue(event.target.value)}/>
            </Alert>
        </div>)
}


