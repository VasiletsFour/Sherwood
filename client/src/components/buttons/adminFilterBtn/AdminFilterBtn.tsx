import React from "react";
import {Button} from 'react-bootstrap';
import "./AdminFilterBtn.scss"

interface Props {
    show: boolean
    text: string
    onClick: () => void
}

export const AdminFilterBtn = ({text, show, ...props}: Props) => (
    show ? <Button className={"adminFilterBtn"} variant='outline-primary' size={"lg"} {...props}>{text}</Button> : null)
