import React from "react";
import {Button, Modal} from 'react-bootstrap';
import "./Alert.scss";

interface Props {
    openStatus: boolean
    title: string;
    text: string;
    btnText?: string;
    okClick?: () => void;
    closeClick: () => void;
    children?: JSX.Element;
}

export const Alert = ({title, text, btnText, closeClick, okClick, openStatus, children}: Props) => (
    <Modal
        className="alert"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={openStatus} onHide={closeClick}>
        <Modal.Header className="alert__header"><Modal.Title
            className="alert__headerTitle">{title}</Modal.Title></Modal.Header>
        <Modal.Body>
            <p className="alert__bodyText">{text}</p>
            {children && children}
        </Modal.Body>
        <Modal.Footer className="alert__footer">
            <div className="alert__footerBtnContainer">
                {btnText && okClick && (
                    <Button onClick={() => okClick()}>
                        {btnText}
                    </Button>
                )}
                <Button onClick={() => closeClick()}>Закрыть</Button>
            </div>
        </Modal.Footer>
    </Modal>);
