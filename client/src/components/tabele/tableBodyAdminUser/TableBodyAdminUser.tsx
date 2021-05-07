import React, {useState} from "react";
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
    const [role, setRole] = useState(user.role)
    const [ban, setBan] = useState(user.ban)
    const empty = "-Нет Даных-"

    const handleUpdateRole = () => {
        const newRole = role === "user" ? "admin" : "user"
        setRole(newRole)

        dispatch(putAdminUserAction.trigger({
            id: user.id,
            body: {role: newRole}
        }))
    }

    const handleUpdateBan = () => {
        setBan(!ban)

        dispatch(putAdminUserAction.trigger({
            id: user.id,
            body: {ban: !ban}
        }))
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.firstname}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.b_day || empty}</td>
            <td>{user.number || empty}</td>
            <td>
                <SwitchBtn
                    onClick={() => handleUpdateRole()}
                    id={"updateAdminRoleUser" + String(user.id)}
                    label={"Сделать пользователя админом"}
                    status={role === "admin"}/>
            </td>
            <td>
                <SwitchBtn
                    onClick={(() => handleUpdateBan())}
                    id={"updateAdminBanUser" + String(user.id)}
                    label={"Заблокировать Пользователя"}
                    status={ban}/>
            </td>
        </tr>
    )
}
