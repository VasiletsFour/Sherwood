import React from "react"
import {LeagueMap, TableBody, TableHead} from "../";
import {TournamentTableApi} from "../../request/TournamentTableApi"
import "./TournamentTable.scss"

const teams = [
    {id: 1, name: "1Name", win: 3, draw: 0, lose: 1, points: 10, goalFor: 20, goalAgainst: 2, previousPosition: 2},
    {id: 2, name: "2Name", win: 1, draw: 2, lose: 1, points: 5, goalFor: 10, goalAgainst: 2, previousPosition: 5},
    {id: 3, name: "3Name", win: 0, draw: 4, lose: 0, points: 4, goalFor: 20, goalAgainst: 20, previousPosition: 1},
    {id: 4, name: "4Name", win: 1, draw: 3, lose: 0, points: 6, goalFor: 10, goalAgainst: 2, previousPosition: 4},
    {id: 5, name: "5Name", win: 1, draw: 0, lose: 3, points: 3, goalFor: 20, goalAgainst: 8, previousPosition: 3},
    {id: 6, name: "6Name", win: 2, draw: 1, lose: 1, points: 7, goalFor: 10, goalAgainst: 20, previousPosition: 1},
    {id: 7, name: "7Name", win: 3, draw: 0, lose: 1, points: 10, goalFor: 3, goalAgainst: 12, previousPosition: 6}
]

export const TournamentTable = () => {
    const newTeams = teams.sort((item: TournamentTableApi, itemNext: TournamentTableApi) => {
        let index = itemNext.points - item.points

        if (index === 0) {
            index = itemNext.goalFor - item.goalFor

            if (index === 0) {
                index = itemNext.goalAgainst - item.goalAgainst
            }
        }

        return index
    })

    return (
        <div className="tournamentTable">
            <LeagueMap/>
            <table className="tournamentTable__table">
                <TableHead classname="tournamentTable__tableCol tournamentTable__tableColHead"/>
                <tbody className="tournamentTable__tableBody">
                {newTeams.map((item: TournamentTableApi, index: number) => <TableBody key={"Table" + item.id}
                                                                                      team={item} index={index}
                                                                                      classname="tournamentTable__tableCol tournamentTable__tableColBody"/>)}
                </tbody>
            </table>
        </div>)
}