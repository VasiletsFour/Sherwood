import React from "react";
import {Alert, Button, Modal} from 'react-bootstrap';
import "./AuthTop.scss"

interface Props {
    err: boolean
    setErr: () => void
    title: string
    message?: string
    info?: boolean
    setInfo?: () => void
}

export const AuthTop = ({err, setErr, message, title, info, setInfo}: Props) => (
    <div className="authTop">
        {!err && !info && <Modal.Title className="authTop__title">{title}</Modal.Title>}
        {err && !info && <Alert variant={"danger"} onClose={() => setErr()} dismissible>
            <Alert.Heading>{message}</Alert.Heading>
            <p className="authTop__text">Попробуйте еще раз!!!</p>
        </Alert>}
        {info && setInfo && !err && <Alert variant={"success"}>
            <Alert.Heading>Успешно</Alert.Heading>
            <p className="authTop__text">Для потверждения перейдите в свою почту!!!</p>
            <hr/>
            <Button className="authTop__btn" onClick={() => setInfo()} variant="outline-success">
                Ок
            </Button>
        </Alert>}
    </div>
);
