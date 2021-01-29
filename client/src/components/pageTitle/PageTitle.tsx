import React from "react"
import "./PageTitle.scss"

interface Props {
    title: string
}

export const PageTitle = ({title}: Props) => (
    <div className="pageTitle">
        <h1>{title}</h1>
    </div>
)