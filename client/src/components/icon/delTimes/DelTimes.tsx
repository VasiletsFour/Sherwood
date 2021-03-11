import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {Alert} from "../../alert/Alert";

interface Props {
    onClick: () => void
    classname: string
    name: string
}

export const DelTimes = ({classname, onClick, name}: Props) => {
    const [openAlert, setOpenAlert] = useState(false)

    const handleClick = () => {
        setOpenAlert(false)

        return onClick()
    }

    return (
        <div>
            <FaTimes className={classname} onClick={() => setOpenAlert(true)}/>
            {openAlert &&
            <Alert
                title="Удалние"
                text={`Вы хотите удалить ${name}`}
                closeClick={() => setOpenAlert(false)}
                okClick={() => handleClick()} btnText={"Да"}/>}
        </div>)
}


