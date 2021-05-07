import React from "react";
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {TableBodyAdminUser, TableHead} from "../../";
import {UserApi} from "../../../request/UserApi";
import {AppState} from "../../../store/store";
import {getAdminUserAction} from "../../../store/user";


const headRow = ["Имя", "Фамилия", "Почта", "День рождения", "Телефон", "Роль", "Заблокирован"]
type Sort = "asc" | "desc"

export const TableAdminUser = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state.userState?.adminUser));
    const dispatch = useDispatch();
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search)
    const type = query.get("type") || ""
    const kind = query.get("kind") === "asc" ? "asc" : "desc"


    const handleHeadValue = (type: string): string => {
        switch (type) {
            case "Имя":
                return "firstname"
            case "Фамилия":
                return "surname"
            case "Почта":
                return "email"
            case "День рождения":
                return ""
            case "Телефон":
                return ""
            case "Роль":
                return "role"
            default:
                return "ban"
        }
    }

    const handleSort = (type: string, kind?: Sort, kindBool?: boolean): void => {
        const sortBy = handleHeadValue(type)
        const kindType = type === query.get("type") && kind === "desc" ? "asc" : "desc"

        dispatch(getAdminUserAction.trigger({query: {sortBy, kind: kindType}}))
        history.replace({search: "?" + new URLSearchParams({type: type, kind: kindType}).toString()})
    };

    return (
        <Table striped bordered hover>
            <TableHead rowHead={headRow} withSort={true}
                       sortType={{type, kind}}
                       setSortType={(type: string, kind?: Sort, kindBool?: boolean) => handleSort(type, kind, kindBool)}/>
            <tbody className="adminUser__tableBody">
            {finished && !loading && data && data.map((item: UserApi, index: number) =>
                <TableBodyAdminUser key={item.id + "adminUser"} user={item} index={index}/>)}
            </tbody>
        </Table>
    );
}
