import React from "react"

interface Props{
    classname: string
    rowHead: Array<string>
}

export const TableHead = ({classname, rowHead}: Props) => (
    <thead>
    <tr className={classname}>
        {rowHead.map((item: string, index: number) => <th key={index + item + "TableHead"}>{item}</th>)}
    </tr>
    </thead>
)