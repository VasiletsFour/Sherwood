import React, {useState} from "react";
import {FaUser} from "react-icons/fa";
import {useSelector} from "react-redux";
import {Authorization, HeaderNav, LogoType, SearchAndInput, SocialIcon, UserMenu} from "../";
import {AppState} from "../../store/store";
import "./Header.scss";

export const Header = () => {
    const {account} = useSelector((state: AppState) => ({account: state?.accountState.account}));
    const [openLogin, setOpenLogin] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="header">
            <div className="header__wrapper">
                <LogoType classname="header" isAdmin={account.data?.role} />
                <div className="header__menuWrapper">
                    <HeaderNav/>
                    <div className="header__loginContainer">
                        {account.finished && !account.loading && account.data &&
                        <FaUser className="header__userIcon" onClick={() => setOpenMenu(!openMenu)}/>}
                        {account.finished && !account.loading && account.data && openMenu && account.data.role &&
                        <UserMenu
                            email={account.data.email}
                            firstname={account.data.firstname}
                            role={account.data.role}
                            surname={account.data.surname}
                            avatar={account.data.avatar}
                            close={() => setOpenMenu(false)}
                        />}
                        {!account.data && (
                            <p onClick={() => setOpenLogin(!openLogin)} className="header__login">Вход</p>
                        )}
                        <Authorization isOpen={openLogin} setClose={() => setOpenLogin(!openLogin)}/>
                        <SearchAndInput/>
                    </div>
                </div>
                <SocialIcon />
            </div>
        </header>
    );
};
