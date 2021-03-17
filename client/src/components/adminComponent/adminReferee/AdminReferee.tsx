import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RefereeApi, RefereeBody} from "../../../request/RefereeApi";
import {delAdminRefereeAction, postAdminRefereeAction, putAdminRefereeAction} from "../../../store/referee";
import {AppState} from "../../../store/store";
import {Alert} from "../../alert/Alert";
import {AdminCreateBtn} from "../../buttons";
import { Spinner} from 'react-bootstrap';
import {AdminUpdateDelete} from "../adminUpdateDelete/AdminUpdateDelete";
import "./AdminReferee.scss"

export const AdminReferee = () => {
    const dispatch = useDispatch();
    const referees = useSelector((state: AppState) => (state.refereeState?.referee));
    const [newReferee, setNewReferee] = useState("")
    const [openCreate, setOpenCreate] = useState(false)


    const handleCloseCreate = () => {
        setNewReferee("")
        setOpenCreate(false)
    }

    const handleCreate = () => {
        dispatch(postAdminRefereeAction.trigger({body: {name: newReferee}}))

        handleCloseCreate()
    }

    return (
        <div className="adminReferee">
            <AdminCreateBtn text="Добаить судью" onClick={() => setOpenCreate(true)}/>
             <Alert
                 openStatus={openCreate}
                title="Судья"
                text="Добавить нового судью"
                closeClick={() => handleCloseCreate()}
                btnText="Создать"
                okClick={() => handleCreate()}>
                <input
                    className="adminTeam__crateTeamInput"
                    type="text"
                    value={newReferee}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setNewReferee(event.target.value)}/>
            </Alert>
            <div className="adminReferee__wrapper">
                {referees.finished && !referees.loading && referees.data &&
                referees.data.map(({name, id}: RefereeApi) => (
                    <AdminUpdateDelete key={id + "AdminReferee"} id={id}
                                       title={"Изминить имя судьи"}
                                       text={`Вы хотите удалить этого судью ${name}?`}
                                       name={name}
                                       handleUpdate={(body: RefereeBody) => {
                                           dispatch(dispatch(putAdminRefereeAction.trigger({id, body})))
                                       }}
                                       handleDelete={() => dispatch(delAdminRefereeAction.trigger({id}))}
                                       classname={"adminTeamName"}/>))}
                {!referees.finished && referees.loading && !referees.data && <Spinner animation={"border"} variant={"light"} size={"sm"}/>}
            </div>
        </div>
    )
};
