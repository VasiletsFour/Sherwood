import React, {useState} from "react";
import {Modal} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {postResultAdminAction, putResultAdminAction} from "../../../store/result";
import "./AdminRefactorMatch.scss";
import {FirstStep} from "./step/FirstStep";
import {SecondStep} from "./step/SecondStep";

interface Props {
    match_id: number
    home: number | undefined
    away: number | undefined
    setClose: () => void;
    openStatus: boolean
}

export const AdminRefactorMatch = ({setClose, openStatus, match_id, home, away}: Props) => {
    const dipatch = useDispatch();

    const [step, setStep] = useState(1)
    const [goalHome, setGoalHome] = useState(0)
    const [goalVisitors, setGoalVisitors] = useState(0)
    const [slaughtered, setSlaughtered] = useState(1)

    const handleClose = () => {
        setGoalHome(0)
        setGoalVisitors(0)
        setClose()
    }

    const handleBack = () => setStep(step - 1)
    const handleNextStep = () => setStep(step + 1)

    const handleFinish = () => {
        const status_host = goalHome > goalVisitors ? "win" : goalHome === goalVisitors ? "draw" : "lose"
        const status_guest = goalHome < goalVisitors ? "win" : goalHome === goalVisitors ? "draw" : "lose"

        handleClose()

        if (typeof (home) !== "number" && typeof (away) !== "number") {
            return dipatch(postResultAdminAction.trigger({
                body: {
                    goal_host: goalHome,
                    goal_guest: goalVisitors,
                    match_id,
                    status_host,
                    status_guest
                }
            }))
        }

        return dipatch(putResultAdminAction.trigger({
            id: match_id,
            body: {goal_host: goalHome, goal_guest: goalVisitors, status_host, status_guest}
        }))
    };

    return (
        <Modal
            className="adminRefactorMatch"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={openStatus} onHide={handleClose}>
            <Modal.Header closeButton={openStatus}/>
            {renderStep({
                step,
                goalHome,
                goalVisitors,
                setGoalHome,
                setGoalVisitors,
                handleNextStep,
                setSlaughtered,
                handleBack,
                handleFinish
            })}
        </Modal>
    );
};

interface RenderProps {
    step: number,
    goalHome: number
    goalVisitors: number
    setGoalHome: (arg: number) => void,
    setGoalVisitors: (arg: number) => void,
    handleNextStep: () => void,
    setSlaughtered: (arg: number) => void,
    handleBack: () => void,
    handleFinish: () => void
}


const renderStep = ({
                        step,
                        goalHome, goalVisitors,
                        setGoalHome,
                        setGoalVisitors,
                        handleNextStep,
                        setSlaughtered,
                        handleBack,
                        handleFinish
                    }: RenderProps) => {
    if (step === 1) {
        return <FirstStep
            setGoalHome={(goals: number) => setGoalHome(goals)}
            setGoalVisitors={(goals: number) => setGoalVisitors(goals)}
            handleNextStep={handleNextStep}/>
    }

    if (step === 2) {
        return <SecondStep
            setSlaughtered={(id: number) => setSlaughtered(id)}
            handleBack={handleBack}
            handleFinish={handleFinish}
            goalHome={goalHome}
            goalVisitors={goalVisitors}
        />
    }

}

