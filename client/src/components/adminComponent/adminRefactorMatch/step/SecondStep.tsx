import React from "react";
import {Button, Modal} from 'react-bootstrap';
import {NumberInput} from "../../../input";

interface Props {
    goalHome:number
    goalVisitors:number
    setSlaughtered: (arg: number) => void
    handleBack:()=>void
    handleFinish: () => void
}

export const SecondStep = ({setSlaughtered, handleBack, handleFinish}: Props) => (
    <div>
        <Modal.Title className="adminRefactorMatch__title">Забивали</Modal.Title>
        <Modal.Body className="adminRefactorMatch__body">
            <div className="adminRefactorMatch__inputContainer">
                <NumberInput max={40} min={0} onChange={(event) => setSlaughtered(Number(event.target.value))}/>
            </div>
            <div className="adminRefactorMatch__inputContainer">
                <NumberInput max={40} min={0}
                             onChange={(event) => setSlaughtered(Number(event.target.value))}/>
            </div>
        </Modal.Body>
        <Modal.Footer className="adminRefactorMatch__footer">
            <Button className="adminRefactorMatch__createBtn" onClick={() => handleBack()}>
                Назад
            </Button>
            <Button className="adminRefactorMatch__createBtn" onClick={() => handleFinish()}>
                Готово
            </Button>
        </Modal.Footer>
    </div>
);


