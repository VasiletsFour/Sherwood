import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "./AdminSideBar.scss";

export const AdminSideBar = () => {
    const [close, setClose] = useState(false);

    return (
        <aside className={`adminSideBar ${close && "adminSideBarClose"}`}>
            <div
                className={`adminSideBar__chevronContainer ${close && "adminSideBarClose__chevronContainer"}`}
                onClick={() => setClose(!close)}>
                <FaChevronRight className="adminSideBar__chevron" />
            </div>
            {!close && (
                <div className="adminSideBar__wrapper">
                    <h1 className="adminSideBar__title">Meню</h1>
                    <div className="adminSideBar__container">
                        <ul>
                            <li>Сезон</li>
                            <li>Лиги</li>
                            <li>Команды</li>
                            <li>Игроки</li>
                            <li>Расписание</li>
                            <li>Результаты</li>
                            <li>Судьи</li>
                        </ul>
                    </div>
                </div>
            )}
        </aside>
    );
};
