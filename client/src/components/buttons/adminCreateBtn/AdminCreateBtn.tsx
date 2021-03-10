import React from "react";
import "./AdminCreateBtn.scss"

interface Props {
    text: string
    onClick: () => void
}

export const AdminCreateBtn = ({text, onClick}: Props) => (
    <div className="adminCreateBtn">
        <button className="adminCreateBtn__btn" onClick={onClick}>
            {text}
        </button>
    </div>

);
