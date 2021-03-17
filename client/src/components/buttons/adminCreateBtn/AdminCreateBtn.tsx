import React from "react";
import {Button} from 'react-bootstrap';
import "./AdminCreateBtn.scss"

interface Props {
    text: string
    onClick: () => void
}

export const AdminCreateBtn = ({text, ...props}: Props) => (
    <Button className={"adminCreateBtn"} variant={'success'} size={"lg"} {...props}>{text}</Button>);
