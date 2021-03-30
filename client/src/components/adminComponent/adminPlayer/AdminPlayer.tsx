import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AdminTopBlock, AdminUpdateDelete, NameOpenChild} from "../../";
import {AdminPlayerApi, PlayerApi, PlayerUpdate} from "../../../request/PlayerApi";
import {delAdminPlayerAction, postAdminPlayerAction, putAdminPlayerAction} from "../../../store/player";
import {AppState} from "../../../store/store";
import "./AdminPlayer.scss"

interface OpenChild {
    id: number | null
    openStatus: boolean
}

export const AdminPlayer = () => {
    const dispatch = useDispatch();
    const players = useSelector((state: AppState) => (state.playerState?.adminPlayer));
    const [openTeam, setOpenTeam] = useState<OpenChild>({id: null, openStatus: false})

    const handleOpenTeam = (id: number) => setOpenTeam({
        id,
        openStatus: openTeam.id === id ? !openTeam.openStatus : true
    })

    const handleAddPlayer = (name: string, team_id: number) => {
        dispatch(postAdminPlayerAction.trigger({body: {name, team_id}}))
    }

    return (
        <div className="adminPlayer">
            <AdminTopBlock title={"Игроки"}/>
            <div className="adminPlayer__container">
                {players.finished && !players.loading && players.data &&
                players.data.map(({id, name, players}: AdminPlayerApi) => (
                    <div className="adminPlayer__team" key={id + "adminPlayer"}>
                        <NameOpenChild
                            name={name}
                            onClick={() => handleOpenTeam(id)}
                            openStatus={openTeam.id === id && openTeam.openStatus}
                            classname="adminPlayer__teamName"
                            addBtn={true}
                            text={`Добавить игрока в ${name}?`}
                            onClickAdd={(name: string) => handleAddPlayer(name, id)}
                        />
                        {openTeam.openStatus && openTeam.id === id &&
                        <div>
                            {players.map((item: PlayerApi, index: number) => (
                                <AdminUpdateDelete key={item.id + "adminPlayerPlayer"} id={item.id} index={index}
                                                   title={"Изминить Имя"}
                                                   text={`Вы хотите игрока ${item.name}?`}
                                                   name={item.name}
                                                   handleUpdate={(body: PlayerUpdate) => {
                                                       dispatch(putAdminPlayerAction.trigger({id: item.id, body}))
                                                   }}
                                                   handleDelete={() => dispatch(delAdminPlayerAction.trigger({id: item.id}))}
                                                   classname={"adminPlayer"}/>
                            ))}
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    );
};
