import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {Alert} from "../../alert/Alert";

interface Props {
    onClick: () => void
    classname: string
    text: string
}

export const DelTimes = ({classname, onClick, text}: Props) => {
    const [openAlert, setOpenAlert] = useState(false)

    const handleClick = () => {
        setOpenAlert(false)

        return onClick()
    }

    return (
        <div>
            <FaTimes className={classname} onClick={() => setOpenAlert(true)}/>
            <Alert
                openStatus={openAlert}
                title="Удалние"
                text={text}
                closeClick={() => setOpenAlert(false)}
                okClick={() => handleClick()} btnText={"Да"}/>
        </div>)
}


