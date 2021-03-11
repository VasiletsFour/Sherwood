import React from "react";
import "./AdminCreateBtn.scss"

interface Props {
    text: string
    onClick: () => void
}

export const AdminCreateBtn = ({text, ...props}: Props) => (
    <div className="adminCreateBtn">
        <button className="adminCreateBtn__btn" {...props}>
            {text}
        </button>
    </div>

);
