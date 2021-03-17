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

    const handleUpdateRole = () => dispatch(putAdminUserAction.trigger({
        id: user.id,
        body: {role: user.role === "user" ? "admin" : "user"}
    }))

    const handleUpdateBan = () => dispatch(putAdminUserAction.trigger({
        id: user.id,
        body: {ban: !user.ban}
    }))


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
                    status={user.role === "admin"}/>
            </td>
            <td>
                <SwitchBtn
                    onClick={(() => handleUpdateBan())}
                    id={"updateAdminBanUser"}
                    label={"Заблокировать Пользователя"}
                    status={user.ban}/>
            </td>
        </tr>
    )
}
