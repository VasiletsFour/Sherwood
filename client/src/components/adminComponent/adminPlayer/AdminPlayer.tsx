import React, {useState} from "react";
import {ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {AdminFilterBtn, AdminFilterTeam, AdminTopBlock, AdminUpdateDelete, NameOpenChild, NotFoundSearch} from "../../";
import {AdminPlayers, PlayerApi} from "../../../request/PlayerApi";
import {delAdminPlayerAction, postAdminPlayerAction, putAdminPlayerAction} from "../../../store/player";
import {AppState} from "../../../store/store";
import "./AdminPlayer.scss"

interface OpenChild {
    id: number | null
    openStatus: boolean
}

export const AdminPlayer = () => {
    const dispatch = useDispatch();
    const {data, finished, loading} = useSelector((state: AppState) => (state.playerState?.adminPlayer));
    const [openTeam, setOpenTeam] = useState<OpenChild>({id: null, openStatus: false});
    const [openFilter, setOpenFilter] = useState(false)

    const handleOpenTeam = (id: number) => (setOpenTeam({
        id,
        openStatus: openTeam.id === id ? !openTeam.openStatus : true
    }))

    const handleAddPlayer = (name: string, team_id: number) => (
        dispatch(postAdminPlayerAction.trigger({body: {name, team_id}}))
    )

    const handleUpdate = (name: string, id: number) => (
        dispatch(putAdminPlayerAction.trigger({
            id,
            body: {name}
        }))
    )

    const handleDelete = (id: number) => dispatch(delAdminPlayerAction.trigger({id}))

    return (
        <div className="adminPlayer">
            <AdminTopBlock title="Игроки">
                <AdminFilterBtn show={!!(data && data.count > 0)} text={"Сортировать Команды"}
                                onClick={() => setOpenFilter(!openFilter)}/>
            </AdminTopBlock>
            <AdminFilterTeam openStatus={openFilter} handleClose={() => setOpenFilter(false)}/>
            <NotFoundSearch show={(data?.list.length === 0)}/>
            <ListGroup className="adminPlayer__container">
                {finished && !loading && data && data.list.map(({id, name, players}: AdminPlayers) => (
                    <ListGroup.Item className="adminPlayer__team" key={id + "adminPlayer"}>
                        <NameOpenChild
                            name={name}
                            onClick={() => handleOpenTeam(id)}
                            openStatus={openTeam.id === id && openTeam.openStatus}
                            classname="adminPlayer__teamName"
                            addBtn={true}
                            text={`Добавить игрока в ${name}?`}
                            onClickAdd={(name: string) => handleAddPlayer(name, id)}/>
                        {players.length > 0 && openTeam.openStatus && openTeam.id === id &&
                        <ListGroup>
                            {players.map((item: PlayerApi, index: number) => (
                                <AdminUpdateDelete
                                    key={item.id + "adminPlayerPlayer"}
                                    id={item.id}
                                    index={index}
                                    title={"Изминить Имя"}
                                    text={`Вы хотите игрока ${item.name}?`}
                                    name={item.name}
                                    handleUpdate={(name: string) => handleUpdate(name, item.id)}
                                    handleDelete={() => handleDelete(item.id)}/>
                            ))}
                        </ListGroup>}
                        {players.length === 0 && openTeam.openStatus && openTeam.id === id && <p>Пока нет игроков</p>}
                    </ListGroup.Item>))}
            </ListGroup>
        </div>
    );
};
