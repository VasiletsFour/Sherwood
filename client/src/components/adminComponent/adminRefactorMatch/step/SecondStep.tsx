import React from "react";
import {Button, Modal} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {MatchAdminQuery} from "../../../../request/MatchApi";
import {AdminPlayers} from "../../../../request/PlayerApi";
import {AppState} from "../../../../store/store";
import {SelectTags} from "../../../input";

interface Props {
    teamsId: MatchAdminQuery
    slaughtered: number[]
    goalHome: number
    goalVisitors: number
    setSlaughtered: (arg: number[]) => void
    handleBack: () => void
    handleFinish: () => void
}

export const SecondStep = ({
                               slaughtered,
                               setSlaughtered,
                               handleBack,
                               handleFinish,
                               goalHome,
                               goalVisitors
                           }: Props) => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.matchState.adminMatch));

    const teams = (goals: number, team: AdminPlayers) => {
        if (!data) return
        const teamHtml = []

        for (let i = 0; i < goals; i++) {
            teamHtml.push(<SelectTags key={i + "adminRefactorMatch"} option={team.players}
                                      handleSelectAdd={(event) => handleAdd(Number(event.target.value))}/>)
        }

        return teamHtml
    }

    const handleAdd = (id: number) => {
        slaughtered.push(id)
        console.log(slaughtered)
        setSlaughtered(slaughtered)
    }

    return (
        <div>
            <Modal.Title className="adminRefactorMatch__title">Забивали</Modal.Title>
            {finished && !loading && data &&
            <Modal.Body className="adminRefactorMatch__body">
                <div className="adminRefactorMatch__inputContainer">
                    {teams(goalHome, data[0])}
                </div>
                <div className="adminRefactorMatch__inputContainer">
                    {teams(goalVisitors, data[1])}
                </div>
            </Modal.Body>}
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
}


