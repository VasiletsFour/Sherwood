import React, {useState} from "react";
import "./SwitchBtn.scss"

interface Props {
    values: string[]
    status: boolean
    onClick: (status: boolean) => void
}

export const SwitchBtn = ({status, values, onClick}: Props) => {
    const [activate, setActivate] = useState(status)

    const handleClick = (status: boolean) => {
        setActivate(status)

        return onClick(status)
    }

    return (
        <div className="switchBtn">
            <button
                disabled={activate}
                onClick={() => handleClick(true)}
                className={`switchBtn__btn ${activate && "switchBtn__btnActivate"}`}>
                {values[0]}
            </button>
            <button
                disabled={!activate}
                onClick={() => handleClick(false)}
                className={`switchBtn__btn ${!activate && "switchBtn__btnActivate"}`}>
                {values[1]}
            </button>
        </div>
    )
};


