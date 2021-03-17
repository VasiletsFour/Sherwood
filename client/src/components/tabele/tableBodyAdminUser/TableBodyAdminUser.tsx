import React from "react";
import {useDispatch} from "react-redux";
import {UserApi} from "../../../request/UserApi";
import {putAdminUserAction} from "../../../store/user";
import {SwitchBtn} from "../../buttons";

interface Props {
    index: number
    user: UserApi;
}

export const TableBodyAdminUser = ({user, index}: Props) => {
    const dispatch = useDispatch();

    const handleUpdateRole = (status: boolean) => dispatch(putAdminUserAction.trigger({
        id: user.id,
        body: {role: status ? "user" : "admin"}
    }))
    const handleUpdateBan = (status: boolean) => dispatch(putAdminUserAction.trigger({
        id: user.id,
        body: {ban: status}
    }))


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.firstname} {user.surname}</td>
            <td>{user.email}</td>
            <td>
                <SwitchBtn
                    onClick={(status: boolean) => handleUpdateRole(status)}
                    values={["Пользователь", "Админ"]}
                    status={user.role === "user"}/>
            </td>
            <td>
                <SwitchBtn
                    onClick={(status => handleUpdateBan(status))}
                    values={["Заблокировать", "Разблокировать"]}
                    status={user.ban}/>
            </td>
        </tr>
    )
}
