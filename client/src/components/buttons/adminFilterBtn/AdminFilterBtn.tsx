import React from "react";
import {Button} from 'react-bootstrap';
import "./AdminFilterBtn.scss"

interface Props {
    text: string
    onClick: () => void
}

export const AdminFilterBtn = ({text, ...props}: Props) => (
    <Button className={"adminFilterBtn"} variant='outline-primary' size={"lg"} {...props}>{text}</Button>);
