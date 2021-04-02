import React, {useState} from "react";
import {FaPen} from "react-icons/fa";
import {PlaceApi} from "../../../request/PlaceApi";
import {Alert} from "../../alert/Alert";
import {SelectTags} from "../../input";

interface Props {
    onClick: (value: string) => void
    classname: string
    previousValue: string
    title: string
    isSelect?: boolean
    option?: number[] | PlaceApi[]
    isDate?: boolean
}

export const UpdatePen = ({classname, onClick, previousValue, title, isDate, isSelect, option}: Props) => {
    const [value, setValue] = useState(previousValue)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClick = () => {
        setOpenAlert(false)

        return onClick(value)
    }

    return (
        <div>
            <FaPen className={classname} onClick={() => setOpenAlert(true)}/>
            <Alert
                openStatus={openAlert}
                title={title}
                text={`Текущее значение ${previousValue}`}
                closeClick={() => setOpenAlert(false)}
                okClick={() => handleClick()} btnText={"Ok"}>
                {isSelect && option ?
                    <SelectTags handleSelectAdd={(event) => setValue(event.target.value)} option={option}/> :
                    <input type={isDate ? "date" : "text"} value={value}
                           onChange={(event) => setValue(event.target.value)}/>}
            </Alert>
        </div>)
}


