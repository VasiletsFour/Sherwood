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
            <AdminCreateBtn text="Создать сезон" onClick={() => handleCreate()}/>
            {createAlert && (
                <Alert
                    title={"Создать новый сезон"}
                    text={`${nextSeason}-${year}`}
                    closeClick={() => setCreateAlert(false)}
                    okClick={() => create()}
                    btnText={"Готово"}
                />
            )}
            <div>
                {season.finished && !season.loading && season.data && (
                    <div className="adminSeason__wrapper">
                        {season.data.map((item: SeasonApi) => (
                            <div className="adminSeason__seasonItem" key={"adminSeason" + item.id}>
                                <p className="adminSeason__seasonItemText">{item.name}</p>
                                <FaTimes className="adminSeason__seasonItemIcon"
                                         onClick={() => dipatch(delSeasonAction.trigger({id: item.id}))}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
