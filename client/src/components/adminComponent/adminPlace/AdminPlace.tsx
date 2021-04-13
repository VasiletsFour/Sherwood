import React, {ChangeEvent, useState} from "react";
import {ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {PlaceApi} from "../../../request/PlaceApi";
import {delPlaceAdminAction, postPlaceAdminAction, putPlaceAdminAction} from "../../../store/place";
import {AppState} from "../../../store/store";
import {Alert} from "../../alert/Alert";
import {AdminCreateBtn} from "../../buttons";
import {AdminTopBlock} from "../adminTopBlock/AdminTopBlock";
import {AdminUpdateDelete} from "../adminUpdateDelete/AdminUpdateDelete";
import "./AdminPlace.scss"

export const AdminPlace = () => {
    const dispatch = useDispatch()
    const {data, finished, loading} = useSelector((state: AppState) => (state.placeState?.placeAdmin));
    const [newPlace, setNewPlace] = useState("")
    const [openPlace, setOpenPlace] = useState(false)

    const handleCloseAlert = () => {
        setNewPlace("")
        setOpenPlace(false)
    }

    const handleCreatePlace = () => {
        newPlace.length >= 0 && dispatch(postPlaceAdminAction.trigger({body: {name: newPlace}}))

        return handleCloseAlert()
    }

    const handleUpdatePlace = (place: string, id: number) => {
        dispatch(putPlaceAdminAction.trigger({id, body: {name: place}}))

        return handleCloseAlert()
    }

    const handleDelPlace = (id: number) => {
        dispatch(delPlaceAdminAction.trigger({id,}))

        return handleCloseAlert()
    }

    return (
        <div className="adminPlace">
            <AdminTopBlock title={"Поля"}>
                <AdminCreateBtn text="Создать Поле" onClick={() => setOpenPlace(true)}/>
            </AdminTopBlock>
            <Alert
                openStatus={openPlace}
                title="Поле"
                text="Добавить новое поел"
                closeClick={() => handleCloseAlert()}
                btnText="Создать"
                okClick={() => handleCreatePlace()}>
                <input
                    className="adminPlace__crateTeamInput"
                    type="text"
                    value={newPlace}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPlace(event.target.value)}/>
            </Alert>
            {finished && !loading && data &&
            <ListGroup className="adminPlace__container">
                {data.map(({id, name}: PlaceApi) =>
                    <AdminUpdateDelete
                        key={id + "AdminPlacePage"}
                        id={id}
                        title={"Изминить название"} text={`Вы хотите удалить ${name}?`}
                        name={name}
                        handleUpdate={(value: string) => handleUpdatePlace(value, id)}
                        handleDelete={() => handleDelPlace(id)}
                    />
                )}
            </ListGroup>}
        </div>
    );
}
