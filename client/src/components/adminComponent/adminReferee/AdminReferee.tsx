import React, {ChangeEvent, useState} from "react";
import {ListGroup, Spinner} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RefereeApi} from "../../../request/RefereeApi";
import {delAdminRefereeAction, postAdminRefereeAction, putAdminRefereeAction} from "../../../store/referee";
import {AppState} from "../../../store/store";
import {Alert} from "../../alert/Alert";
import {AdminCreateBtn} from "../../buttons";
import {AdminTopBlock} from "../adminTopBlock/AdminTopBlock";
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
            <AdminTopBlock title={"Судьи"}>
                <AdminCreateBtn text="Добаить судью" onClick={() => setOpenCreate(true)}/>
            </AdminTopBlock>
            <Alert
                openStatus={openCreate}
                title="Судья"
                text="Добавить нового судью"
                closeClick={() => handleCloseCreate()}
                btnText="Создать"
                okClick={() => handleCreate()}>
                <input
                    className="adminReferee__crateTeamInput"
                    type="text"
                    value={newReferee}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setNewReferee(event.target.value)}/>
            </Alert>
            {referees.finished && !referees.loading && referees.data &&
            <ListGroup className="adminReferee__list">
                {referees.data.map(({name, id}: RefereeApi) => (
                    <AdminUpdateDelete
                        key={id + "AdminReferee"} id={id}
                        title={"Изминить имя судьи"}
                        text={`Вы хотите удалить этого судью ${name}?`}
                        name={name}
                        handleUpdate={(name: string) => dispatch(putAdminRefereeAction.trigger({id, body: {name}}))}
                        handleDelete={() => dispatch(delAdminRefereeAction.trigger({id}))}
                    />))}
                {!referees.finished && referees.loading && !referees.data &&
                <Spinner animation={"border"} variant={"light"} size={"sm"}/>}
            </ListGroup>}
        </div>
    )
};
