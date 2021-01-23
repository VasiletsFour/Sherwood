import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom";
import {Authorization} from "../";
import {FaInstagram, FaSearch, FaYoutube} from 'react-icons/fa';
import {locationGo} from "../../utils/locationGo"
import {
    HOME_URL,
    INSTAGRAM_URL,
    SCORER_URL,
    TEAMS_URL,
    TIME_TABLE_URL,
    TOURNAMENT_TABLE_URL,
    YOU_TUBE_URL
} from "../../utils/urls"
import "./Header.scss"

export const Header = () => {
    const history = useHistory()
    const [openSearch, setOpenSearch] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    const handleLogo = () => history.push(HOME_URL.urlTemplate)

    return (
        <header className="header">
            <div className="header__logotypeContainer" onClick={() => handleLogo()}>
                <p className="header__logotype">Elite</p>
            </div>
            <div className="header__menuWrapper">
                <ul className="header__menuContainer">
                    <li><Link to={TIME_TABLE_URL.urlTemplate}>Расписание</Link></li>
                    <li>Результаты матчей</li>
                    <li><Link to={TOURNAMENT_TABLE_URL.urlTemplate}>Турнирная таблица</Link></li>
                    <li><Link to={TEAMS_URL.urlTemplate}>Команды</Link></li>
                    <li><Link to={SCORER_URL.urlTemplate}>Бомбардиры</Link></li>
                    <li>Заявочный лист</li>
                    <li>Комитет</li>
                </ul>
                <div className="header__loginContainer">
                    <p onClick={() => setOpenLogin(!openLogin)} className="header__login">Вход</p>
                    {openLogin && <Authorization setClose={() => setOpenLogin(!openLogin)}/>}
                    <div className="header__search">
                        <FaSearch className="header__icon" onClick={() => setOpenSearch(!openSearch)}/>
                        {openSearch && <input className="header__inputSearch" type="text"/>}
                    </div>
                </div>
            </div>
            <div className="header__socialIconContainer">
                <FaInstagram className="header__socialIcon"
                             onClick={() => locationGo(INSTAGRAM_URL.urlTemplate)}/>
                <FaYoutube className="header__socialIcon"
                           onClick={() => locationGo(YOU_TUBE_URL.urlTemplate)}/>
            </div>
        </header>
    )
}