import React, {useState} from "react";
import {FaUser} from "react-icons/fa";
import {useSelector} from "react-redux";
import {Authorization, HeaderNav, LogoType, SearchAndInput, SocialIcon, UserMenu} from "../";
import {AppState} from "../../store/store";
import {getToken} from "../../utils";
import "./Header.scss";

export const Header = () => {
    const {data, finished, loading} = useSelector((state: AppState) => (state?.accountState.account));
    const [openLogin, setOpenLogin] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    console.log(data)
    return (
        <header className="header">
            <div className="header__wrapper">
                <LogoType classname="header" isAdmin={data?.role}/>
                <div className="header__menuWrapper">
                    <HeaderNav/>
                    <div className="header__loginContainer">
                        {finished && !loading && data &&
                        <FaUser className="header__userIcon" onClick={() => setOpenMenu(!openMenu)}/>}
                        {finished && !loading && data && openMenu && data.role &&
                        <UserMenu
                            email={data.email}
                            firstname={data.firstname}
                            role={data.role}
                            surname={data.surname}
                            avatar={data.avatar}
                            close={() => setOpenMenu(false)}
                        />}
                        {!data && !getToken() &&
                        <p onClick={() => setOpenLogin(!openLogin)} className="header__login">Вход</p>}
                        <Authorization isOpen={openLogin} setClose={() => setOpenLogin(!openLogin)}/>
                        <SearchAndInput/>
                    </div>
                </div>
                <SocialIcon />
            </div>
        </header>
    );
};
