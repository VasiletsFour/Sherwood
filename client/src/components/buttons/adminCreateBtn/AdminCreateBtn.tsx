import React from "react";
import { Button } from 'react-bootstrap';
import "./AdminCreateBtn.scss"

interface Props {
    text: string
    onClick: () => void
}

export const AdminCreateBtn = ({text, ...props}: Props) => (
    <div className="adminCreateBtn">
        <Button className="adminCreateBtn__btn" variant={'success'} {...props}>
            {text}
        </Button>
    </div>

);
