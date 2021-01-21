import React from "react"

interface Props{
    classname:string
}

export const TableHead = ({classname}:Props) => (
    <thead >
    <tr className={classname}>
        <th>Инфо</th>
        <th>Позиция</th>
        <th>Имя</th>
        <th>Игр</th>
        <th>Побед</th>
        <th>Ничьих</th>
        <th>Поражений</th>
        <th>Забито</th>
        <th>Пропущено</th>
        <th>Разница</th>
        <th>Очков</th>
    </tr>
    </thead>
)