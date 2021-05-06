import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import {FaTimes} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {AdminCreateBtn, AdminTopBlock, Alert} from "../../";
import {SeasonApi} from "../../../request/SeasonApi";
import {delSeasonAction, postSeasonAction} from "../../../store/season";
import {AppState} from "../../../store/store";
import {dateSeason} from "../../../utils";
import "./AdminSeason.scss"

export const AdminSeason = () => {
    const dipatch = useDispatch();
    const {data, finished, loading} = useSelector((state: AppState) => (state.seasonState?.seasons));
    const [createAlert, setCreateAlert] = useState(false);
    const [nextSeason, setNextSeason] = useState("");
    const [haveActive, setHaveActive] = useState(false)
    const year = new Date().getFullYear();

    useEffect(() => {
        data && setHaveActive(data.some(e => e.active))
    }, [data])

    const create = () => {
        dipatch(postSeasonAction.trigger({body: {name: nextSeason}}));
        setCreateAlert(false);
    };

    const handleCreate = () => {
        const previousSeason = data && data[data.length - 1]?.name?.replace(`-${year}`, "");

        switch (previousSeason) {
            case "Весна":
                setNextSeason(`Лето`);
                break;
            case "Лето":
                setNextSeason(`Осень`);
                break;
            case "Осень":
                setNextSeason(`Зима`);
                break;
            default:
                setNextSeason(dateSeason());
        }

        setCreateAlert(true);
    };

    return (
        <div className="adminSeason">
            <AdminTopBlock title="Сезон">
                <AdminCreateBtn text="Создать сезон" onClick={() => handleCreate()} disabled={haveActive}/>
            </AdminTopBlock>
            <Alert
                openStatus={createAlert}
                title={"Создать новый сезон"}
                text={`${nextSeason}-${year}`}
                closeClick={() => setCreateAlert(false)}
                okClick={() => create()}
                btnText={"Готово"}/>
            <div>
                {finished && !loading && data && (
                    <ListGroup className="adminSeason__wrapper">
                        {data.map(({name, id}: SeasonApi) => (
                            <ListGroup.Item className="adminSeason__seasonItemWrapper" variant={"dark"} key={"adminSeason" + id}>
                                <div className="adminSeason__seasonItem">
                                    <p className="adminSeason__seasonItemText">{name}</p>
                                    <FaTimes className="adminSeason__seasonItemIcon"
                                             onClick={() => dipatch(delSeasonAction.trigger({id}))}/>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </div>
        </div>
    );
};
