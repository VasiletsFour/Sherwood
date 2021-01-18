import React from "react"
import { FaSearch } from 'react-icons/fa';
import "./Header.scss"

export const Header =()=>{
    return(
        <header className="header">
            <div className="header__logotypeContainer">
                <p className="header__logotype">Elite</p>
            </div>
            <div className="header">
                <ul>
                    <li>Расписание</li>
                    <li>Результаты матчей</li>
                    <li>Турнирная таблица</li>
                </ul>
                <div>
                    <FaSearch/>
                </div>
            </div>
        </header>
    )
}