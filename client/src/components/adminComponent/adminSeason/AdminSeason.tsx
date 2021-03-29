import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {AdminCreateBtn, Alert} from "../../";
import {SeasonApi} from "../../../request/SeasonApi";
import {delSeasonAction, postSeasonAction} from "../../../store/season";
import {AppState} from "../../../store/store";
import "./AdminSeason.scss"

export const AdminSeason = () => {
    const dipatch = useDispatch();
    const {season} = useSelector((state: AppState) => ({season: state.seasonState?.seasons}));
    const [createAlert, setCreateAlert] = useState(false);
    const [nextSeason, setNextSeason] = useState("");
    const year = new Date().getFullYear();

    const create = () => {
        dipatch(postSeasonAction.trigger({body: {name: nextSeason}}));
        setCreateAlert(false);
    };

    const handleCreate = () => {
        const previousSeason = season.data && season?.data[season.data.length - 1]?.name?.replace(`-${year}`, "");

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
                setNextSeason(`Весна`);
        }

        setCreateAlert(true);
    };

    return (
        <div className="adminSeason">
            <div className="adminSeason__top">
                <AdminCreateBtn text="Создать сезон" onClick={() => handleCreate()}/>
                <Alert
                    openStatus={createAlert}
                    title={"Создать новый сезон"}
                    text={`${nextSeason}-${year}`}
                    closeClick={() => setCreateAlert(false)}
                    okClick={() => create()}
                    btnText={"Готово"}/>
            </div>
            <div>
                {season.finished && !season.loading && season.data && (
                    <div className="adminSeason__wrapper">
                        {season.data.map(({name, id}: SeasonApi) => (
                            <div className="adminSeason__seasonItem" key={"adminSeason" + id}>
                                <p className="adminSeason__seasonItemText">{name}</p>
                                <FaTimes className="adminSeason__seasonItemIcon"
                                         onClick={() => dipatch(delSeasonAction.trigger({id}))}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
