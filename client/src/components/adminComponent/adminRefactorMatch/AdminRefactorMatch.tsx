import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {ResultCreate} from "../../../request/ResultApi";
import {NumberInput} from "../../input";
import "./AdminRefactorMatch.scss";

interface Props {
    match: number
    action: {
        trigger: (params: { body: ResultCreate }) => void;
    }
    setClose: () => void;
    openStatus: boolean
}

export const AdminRefactorMatch = ({setClose, openStatus, match, action}: Props) => {
    const dipatch = useDispatch();
    const [goalHome, setGoalHome] = useState(0)
    const [goalVisitors, setGoalVisitors] = useState(0)

    const handleClose = () => {
        setGoalHome(0)
        setGoalVisitors(0)
        setClose()
    }

    const handleClick = () => {
        const homeResult = goalHome > goalVisitors ? "win" : goalHome === goalVisitors ? "draw" : "lose"
        const visitorsResult = goalHome < goalVisitors ? "win" : goalHome === goalVisitors ? "draw" : "lose"
        const bodyCreate: ResultCreate = {goalHome, goalVisitors, match, homeResult, visitorsResult}

        dipatch(action.trigger({body: bodyCreate}));

        handleClose()
    };

    return (
        <Modal
            className="adminRefactorMatch"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={openStatus} onHide={handleClose}>
            <Modal.Header closeButton={openStatus}/>
            <Modal.Body className="adminRefactorMatch__body">
                <div className="adminCreateArticle__main">
                    <div className="adminCreateArticle__inputContainer">
                        <NumberInput max={40} min={0} onChange={(event) => setGoalHome(Number(event.target.value))}/>
                    </div>
                    <div className="adminCreateArticle__inputContainer">
                        <NumberInput max={40} min={0}
                                     onChange={(event) => setGoalVisitors(Number(event.target.value))}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="adminCreateArticle__footer">
                <Button className="adminCreateArticle__createBtn" onClick={() => handleClick()}>
                    Готово
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

