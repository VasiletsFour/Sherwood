import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {postResultAdminAction, putResultAdminAction} from "../../../store/result";
import {NumberInput} from "../../input";
import "./AdminRefactorMatch.scss";

interface Props {
    match: number
    home: number | undefined
    away: number | undefined
    setClose: () => void;
    openStatus: boolean
}

export const AdminRefactorMatch = ({setClose, openStatus, match, home, away}: Props) => {
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

        handleClose()

        if (typeof (home) !== "number" && typeof (away) !== "number") {
            return dipatch(postResultAdminAction.trigger({
                body: {
                    goalHome,
                    goalVisitors,
                    match,
                    homeResult,
                    visitorsResult
                }
            }))
        }

        return dipatch(putResultAdminAction.trigger({
            id: match,
            body: {goalHome, goalVisitors, homeResult, visitorsResult}
        }))
    };

    return (
        <Modal
            className="adminRefactorMatch"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={openStatus} onHide={handleClose}>
            <Modal.Header closeButton={openStatus}/>
            <Modal.Title className="adminRefactorMatch__title">Счет матча</Modal.Title>
            <Modal.Body className="adminRefactorMatch__body">
                <div className="adminRefactorMatch__inputContainer">
                    <NumberInput max={40} min={0} onChange={(event) => setGoalHome(Number(event.target.value))}/>
                </div>
                <span className={"adminRefactorMatch__dash"}>-</span>
                <div className="adminRefactorMatch__inputContainer">
                    <NumberInput max={40} min={0}
                                 onChange={(event) => setGoalVisitors(Number(event.target.value))}/>
                </div>
            </Modal.Body>
            <Modal.Footer className="adminRefactorMatch__footer">
                <Button className="adminRefactorMatch__createBtn" onClick={() => handleClick()}>
                    Готово
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

