import React from "react"
import {PageTitle, TeamsTable} from "../";
import "./Teams.scss"

export const Teams = () => (
    <div className="teams">
        <PageTitle title="Команды"/>
        <div className="teams__container">
            <TeamsTable/>
        </div>
    </div>
)
