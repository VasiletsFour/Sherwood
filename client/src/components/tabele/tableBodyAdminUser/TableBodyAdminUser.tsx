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
            <td>{user.firstname} {user.surname}</td>
            <td>{user.email}</td>
            <td>
                <SwitchBtn
                    onClick={() => handleUpdateRole()}
                    id={"updateAdminRoleUser"}
                    label={"Сделать пользователя админом"}
                    status={role === "admin"}/>
            </td>
            <td>
                <SwitchBtn
                    onClick={(() => handleUpdateBan())}
                    id={"updateAdminBanUser"}
                    label={"Заблокировать Пользователя"}
                    status={ban}/>
            </td>
        </tr>
    )
}
