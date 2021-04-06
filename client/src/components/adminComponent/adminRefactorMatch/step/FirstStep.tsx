import React from "react";
import {Button, Modal} from 'react-bootstrap';
import {NumberInput} from "../../../input";

interface Props {
    setGoalHome: (arg: number) => void
    setGoalVisitors: (arg: number) => void
    handleNextStep: () => void
}

export const FirstStep = ({setGoalHome, setGoalVisitors, handleNextStep}: Props) => (
    <div>
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
            <Button className="adminRefactorMatch__createBtn" onClick={() => handleNextStep()}>
                Готово
            </Button>
        </Modal.Footer>
    </div>
);


