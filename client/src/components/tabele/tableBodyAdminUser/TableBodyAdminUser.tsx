import React from "react";
import {UserApi} from "../../../request/UserApi";

interface Props {
    user: UserApi;
    classname: string;
}

export const TableBodyAdminUser = ({user, classname}: Props) => (
    <tr className={`${classname} "tableBody`}>
        <td>{user.firstname} {user.surname}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>{user.ban ? "Заблокирован" : "Не заблокирован"}</td>
    </tr>
);
