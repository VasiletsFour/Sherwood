import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {SeasonApi} from "../../../request/SeasonApi";
import {delSeasonAction, postSeasonAction} from "../../../store/season";
import {AppState} from "../../../store/store";
import {Alert} from "../../alert/Alert";

export const AdminSeason = () => {
        const dipatch = useDispatch();
        const {season} = useSelector((state: AppState) => ({season: state.seasonState?.seasons}));
        const [createAlert, setCreateAlert] = useState(false)
        const [nextSeason, setNextSeason] = useState("")
        const year = new Date().getFullYear()

        const create = () => {
            dipatch(postSeasonAction.trigger({body: {name: nextSeason}}))
            setCreateAlert(false)
        }

        const handleCreate = () => {
            const previousSeason = season.data && season.data[season.data.length - 1].name.replace(`-${year}`, "")

            switch (previousSeason) {
                case "Весна":
                    setNextSeason(`Лето`)
                    break
                case "Лето":
                    setNextSeason(`Осень`)
                    break
                case "Осень":
                    setNextSeason(`Зима`)
                    break
                default:
                    setNextSeason(`Весна`)
            }

            setCreateAlert(true)
        }

        return (
            <div className="adminSeason">
                <div className="adminSeason__btnContainer">
                    <button className="adminSeason__btnCreate" onClick={() => handleCreate()}>Создать сезон</button>
                </div>
                {createAlert &&
                <Alert title={"Создать новый сезон"} text={`${nextSeason}-${year}`} closeClick={() => setCreateAlert(false)}
                       okClick={() => create()} btnText={"Готово"}/>}
                {season.finished &&
                !season.loading &&
                season.data &&
                <div>
                    {season.data.map((item: SeasonApi) => <div
                        key={"adminSeason" + item.id}>{item.name}<span><FaTimes
                        onClick={() => dipatch(delSeasonAction.trigger({id: item.id}))}/></span>
                    </div>)}
                </div>}
            </div>
        );
    }
;
