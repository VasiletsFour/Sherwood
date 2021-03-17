import React, {useState} from "react";
import {FaPlus} from "react-icons/fa";
import {Alert} from "../../alert/Alert";

interface Props {
    onClick: (name: string) => void
    text: string
}

export const AddPlus = ({onClick, text}: Props) => {
    const [inputValue, setInputValue] = useState("")
    const [openAlert, setOpenAlert] = useState(false)

    const handleClick = () => {
        setOpenAlert(false)

        return onClick(inputValue)
    }

    return (
        <span>
            <FaPlus onClick={() => setOpenAlert(true)}/>
            <Alert
                openStatus={openAlert}
                title="Добавить"
                text={text}
                closeClick={() => setOpenAlert(false)}
                okClick={() => handleClick()} btnText={"Добавить"}>
                <input value={inputValue} onChange={event => setInputValue(event.target.value)}/>
            </Alert>
        </span>)
}