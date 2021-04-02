import React from "react";
import {AdminResultTable} from "../../tabele";
import {AdminTopBlock} from "../adminTopBlock/AdminTopBlock";
import "./AdminResult.scss"

export const AdminResult = () => (
    <div className="adminResult">
        <AdminTopBlock title={"Резульаты"}/>
        <div className="adminResult__container">
            <AdminResultTable/>
        </div>
    </div>
)

